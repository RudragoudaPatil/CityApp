import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-successfull',
  templateUrl: './booking-successfull.component.html',
  styleUrls: ['./booking-successfull.component.scss'],
})
export class BookingSuccessfullComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}


  onSubmit(){
    this.router.navigate(['/movie'])
  }
}
