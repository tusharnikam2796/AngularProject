import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSucessComponent } from './owner-sucess/owner-sucess.component';
import { OwnerHotelRagistrationComponent } from './owner-hotel-ragistration/owner-hotel-ragistration.component';
import { OwnerDialogComponent } from './owner-dialog/owner-dialog.component';




@NgModule({
  declarations: [
    OwnerHomeComponent,
    OwnerSignupComponent,
    OwnerSucessComponent,
    OwnerHotelRagistrationComponent,
    OwnerDialogComponent,
    
   
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
