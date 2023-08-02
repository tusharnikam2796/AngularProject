import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent {
  adminSignupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

ngOnInit(){
  this.myAdminSignupForm()
}


myAdminSignupForm(){
  this.adminSignupForm=this.formBuilder.group({
   adminName:['',[]],
    

  })
}

}
