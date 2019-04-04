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

  addBooking(booking){
  this.bookingService.addRemoteBooking(booking).subscribe(()=>{   
   this.router.navigate(['/payment']);
   console.log(booking);
});
}
amount=this.data.tickets*50
// addBooking(booking){
//   this.movies={
//   customer_id:2,
//   tickets:t,
//   movie_id:movie.id,
//   movie_name:movie.name,
//   movie_time:'12:50',
//   theatre:'Cinepolis Meenakshi Mall',
//   screen:'Screen 2',
//   city:'Bangalore',
//   movie_date:'2019-05-07',
//   date:'2019-03-27',
//   amount:this.amount,
//   ticket_price:50
//   }
//   console.log('data sent====>',this.addBooking)
//   this.bookingService.addRemoteBooking(this.booking).subscribe((e)=>{console.log(JSON.stringify(e));
//   this.router.navigate(['/payment'])
//   });
  
// }
}