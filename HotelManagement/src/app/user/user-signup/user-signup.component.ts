import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {
  userSignupForm!:FormGroup;
  journey: any;


  constructor(private formBuilder:FormBuilder,private router : Router,
    private commonService:CommonService, private commonApiCallService:CommonApiCallService){}

  ngOnInit(){
    this.journey=this.commonService.journey;
    this.myUserSignupForm();
  }

  myUserSignupForm(){
    this.userSignupForm=this.formBuilder.group({
      userName:['',[Validators.required, Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(2)]],
      contact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      address:['',[Validators.required,]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$')]],
      adharNumber:['',[Validators.required,]],
      gender:['',[Validators.required,]],
      password:['',[Validators.required,]],
      confirmPassword:['',[Validators.required,]],
    })
  }

  submit(){

    let request={
      userName:this.userSignupForm.value.userName,
      contact:this.userSignupForm.value.contact,
      address:this.userSignupForm.value.address,
      email:this.userSignupForm.value.email,
      adharNumber:this.userSignupForm.value.adharNumber,
      gender:this.userSignupForm.value.gender,
      password:this.userSignupForm.value.password,
      confirmPassword:this.userSignupForm.value.confirmPassword,


    }
      this.commonApiCallService.postApiCall(this.journey,request).subscribe(resp=>{
        console.log(resp);
        
      })
      this.router.navigateByUrl('');
  }

  back(){
      this.router.navigateByUrl('user/userHome')
  }
}
