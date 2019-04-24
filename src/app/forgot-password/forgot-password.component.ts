import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router,private registerService:RegistrationService) { }
  customer={phone:''};
  password:any='';
  ngOnInit() {}
  onLogin(){
    this.router.navigate(['/login'])
  }

  reset(){
    this.registerService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer)=>{
    this.password=customer; 
    console.log(customer);
    alert('This is Your PassWord'+ this.password[0].password);
    });
    this.router.navigate(['/login'])
    }
    forget(){
    this.router.navigate(['/forgetpassword'])
    }
    register(){
    this.router.navigate(['/register'])
    }
}
