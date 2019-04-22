import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customers=[];
  customer:any={};
  constructor(private router:Router,private registerService:RegistrationService,public alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {
    this.registerService.getCustomerByEmail().subscribe((result) => {this.customers = result;});
    console.log(this.customers);
  }

  onRegister(){
    this.router.navigate(['/registration'])
  }
  async onLogin(){
      const loading = await this.loadingController.create({
        message: 'Please wait',
        duration: 2000
      });
      await loading.present();
      console.log('Loading dismissed!');
   
       for(var i=0;i<this.customers.length;i++){
  if ((this.customer.name == this.customers[i].name) && (this.customer.password == this.customers[i].password)){
    const { role, data } = await loading.onDidDismiss();
    this.router.navigate(['/movie']);
  //  } 
  //  else{
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Subtitle',
  //     message: 'Please Enter UserName and Password Correctly.',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  //   }
}
    }

  
  }
}
