import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

list:[];
  ngOnInit() {
    this.bookingService.getRemoteBooking().subscribe((result) => {this.list = result;});
    console.log(this.list);

  }
 
  constructor(private router:Router,private bookingService:BookingsService) {}

  

  onSubmit(){
    this.router.navigate(['/success'])
  }
  // getBooking(){
  //   this.bookingService.getRemoteBooking().subscribe((result) => {this.list = result;});
  //   console.log(this.list);
  // }
 
}