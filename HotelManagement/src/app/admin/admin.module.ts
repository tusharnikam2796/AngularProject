import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSucessComponent } from './admin-sucess/admin-sucess.component';



@NgModule({
  declarations: [
    
  
    AdminHomeComponent,
            AdminSignupComponent,
            AdminSucessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
