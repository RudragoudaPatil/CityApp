import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
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
    this.router.navigate(['/profile'])
  }
  onBooking(){
    this.router.navigate(['/payment'])
  }

}
