import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MovieComponent } from './movie/movie.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login',
  component:LoginComponent 
},
{
  path:'registration',
  component:RegistrationComponent
},
{
  path:'movie',
  component:MovieComponent
},
{
  path:'booking/:id',
  component:BookingComponent
},
{
  path:'payment',
  component:PaymentComponent
},
{
  path:'forgotpassword',
  component:ForgotPasswordComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
