import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {


  ngOnInit() {}
 
  constructor(private router:Router) {}

  

  onSubmit(){
    alert("your booking is done");
    this.router.navigate(['/movie']);
  }
}
