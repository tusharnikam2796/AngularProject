import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';

const routes: Routes = [
  {path:'',component:OwnerHomeComponent},
  {path:'ownerHome',component:OwnerHomeComponent},
  {path:'ownerLogin',component:OwnerLoginComponent},
  {path:'ownerSignup',component:OwnerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
