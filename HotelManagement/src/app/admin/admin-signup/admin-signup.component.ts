import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent {
  adminSignupForm!:FormGroup;
  journey: any;

  constructor(private formBuilder:FormBuilder, private router:Router,private commonService:CommonService, private commonApiCallService:CommonApiCallService ){}

ngOnInit(){
  this.myAdminSignupForm();
  this.journey=this.commonService.journey;

}


myAdminSignupForm(){
  this.adminSignupForm=this.formBuilder.group({
   adminName:['',[Validators.required]],
   contact:['',[Validators.required]],
   address:['',[Validators.required]],
   email:['',[Validators.required]],
   adharNumber:['',[Validators.required]],
   gender:['',[Validators.required]],
   password:['',[Validators.required]],
   confirmPassword:['',[Validators.required]],
    

  })
}


back(){
    this.router.navigateByUrl('admin/adminHome')
}
submit(){
  let request={
    adminName:this.adminSignupForm.value.adminName,
    contact:this.adminSignupForm.value.contact,
    address:this.adminSignupForm.value.address,
    email:this.adminSignupForm.value.email,
    adharNumber:this.adminSignupForm.value.adharNumber,
    gender:this.adminSignupForm.value.gender,
    password:this.adminSignupForm.value.password,
    confirmPassword:this.adminSignupForm.value.confirmPassword,
}

this.commonApiCallService.postApiCall(this.journey,request).subscribe(resp=>{
  console.log(resp);
  
})
this.router.navigateByUrl('');
}

}
