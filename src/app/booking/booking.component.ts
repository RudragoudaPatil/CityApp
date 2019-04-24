import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var RazorpayCheckout:any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookings:[];
  my_tickets:'';
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


  addBooking(){

 var amountperticket : any=this.my_tickets;
var options = {
  
  description: 'Credits towards consultation',
  image: 'https://i.imgur.com/3g7nmJC.png',
  currency: 'INR',
  key: 'rzp_test_gEEko61scsbxmP',
  //order_id: 'order_7HtFNLS98dSj8x',
  // amount: '5000',
 amount:((amountperticket)*(12000)), 
 name: 'Made Payment',
  prefill: {
    email: 'pranav@razorpay.com',
    contact: '8879524924',
    name: 'Pranav Gupta'
  },
  theme: {
    color: '#F37254'
  }
}

var successCallback = function(success) {
  alert('Congratulationss your tickets are Booked : ')
  var orderId = success.razorpay_order_id
  var signature = success.razorpay_signature
  this.router.navigate(['/movie'])
}

var cancelCallback = function(error) {
  alert(error.description + ' (Error '+error.code+')')
}

RazorpayCheckout.on('payment.success', successCallback)
RazorpayCheckout.on('payment.cancel', cancelCallback)
RazorpayCheckout.open(options)


}
back(){
  this.router.navigate(['/movie'])
}

//amount=this.data.tickets*50
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