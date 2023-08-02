import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';


const routes: Routes = [
 {path:'',component:AdminHomeComponent},
 {path:'adminSignup',component:AdminSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
