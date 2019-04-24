import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
list=[];
  constructor(private movieService:MovieService,private router:Router,private bookingService:BookingsService) { }

  ngOnInit() {
   this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
    console.log(this.list);
  }
  onBooking(m){
  this.router.navigate(['/booking/'+m.id])
  }
  onLogout(){
    alert("logout")
    this.router.navigate(['/login'])
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  onOffer(){
    this.router.navigate(['/offers'])
  }
  onHome(){
  this.router.navigate(['/movie'])
  }
  onProfile(){
    alert("djdj")
    this.router.navigate(['/profile'])
  }
}
