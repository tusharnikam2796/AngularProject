import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { OwnerSucessComponent } from './owner-sucess/owner-sucess.component';
import { OwnerHotelRagistrationComponent } from './owner-hotel-ragistration/owner-hotel-ragistration.component';

const routes: Routes = [
  {path:'',component:OwnerHomeComponent},
  {path:'ownerHome',component:OwnerHomeComponent},
  {path:'ownerSignup',component:OwnerSignupComponent},
  {path:'ownerSucess',component:OwnerSucessComponent},
  {path:'ownerHotelRagistration',component:OwnerHotelRagistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
