import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offerpage',
  templateUrl: './offerpage.component.html',
  styleUrls: ['./offerpage.component.scss'],
})
export class OfferpageComponent implements OnInit {
  slideData:any = [];
  movieList:any = [];
  constructor(private router:Router) {
    this.slideData = [{ image: "../../assets/offer.jpg" },
    { image: "../../assets/offer2.png" },
    { image: "../../assets/bur.jpg" }, 
    { image: "../../assets/bur1.png" }];
  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
 

   
 
      
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
}
