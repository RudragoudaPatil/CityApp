import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookings:[];
  sub:any;
  movie_id:any;
  booking:any;
  data={
    tickets:0
  }
  constructor(private bookingService:BookingsService,private router:Router,private route: ActivatedRoute,) { }


movies={
  customer_id:0,
  tickets:0,
  movie_id:0,
  movie_name:'',
  movie_time:'',
  theatre:'',
  scrren:'',
  city:'',
  movie_date:'',
  date:'',
  amount:'',
  ticket_price:0
}


  ngOnInit() {
    // this.bookingService.getMovieById().subscribe((result) => {this.bookings = result;});
    // console.log(this.bookings);
    this.sub = this.route.params.subscribe(params => {
      this.movie_id = +params['id']; // (+) converts string 'id' to a number
      console.log("Movie is "+this.movie_id);
      this.booking = this.bookingService.getMovieId(this.movie_id).subscribe((movie)=>{
        console.log(movie)
        this.booking=movie;
      });
      console.log(this.booking);

      // In a real app: dispatch action to load the details here.
    })
  }

  // getMovie(){
  //   this.bookingServi
  // }
  amount=this.data.tickets*100;
  addBooking(booking){
  this.bookingService.addRemoteBooking(booking).subscribe(()=>{   
   this.router.navigate(['/payment']);
   console.log(booking);
});
}
}