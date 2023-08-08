import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSucessComponent } from './admin-sucess/admin-sucess.component';


const routes: Routes = [
 {path:'',component:AdminHomeComponent},
 {path:'adminHome',component:AdminHomeComponent},
 {path:'adminSignup',component:AdminSignupComponent},
 {path:'adminSucess',component:AdminSucessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
