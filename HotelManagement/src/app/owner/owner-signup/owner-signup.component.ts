import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.scss']
})
export class OwnerSignupComponent {

  ownerSignupForm!:FormGroup;
  showPass!: boolean;
  showConfPass!: boolean;
  journey:any;
  postResponce:any;

  constructor(private formBuilder:FormBuilder,private router : Router,
    private commonService:CommonService, private commonApiCallService:CommonApiCallService){}

  ngOnInit(){
    this.journey=this.commonService.journey;
    console.log(' this.journey', this.journey);
    
    this.ownerSignup();
  }

  ownerSignup(){
     this.ownerSignupForm=this.formBuilder.group({
      fullName:['',[Validators.required, Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(2),this.commonService.whiteSpaceValidator]],
      userName:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*$'),Validators.minLength(2)]],
      panNumber:['',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
      contact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$')]],
      gender:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
     })
  }

  visiblepass(){
    this.showPass=!this.showPass;
  }
  visibleconfPass(){
    this.showConfPass=!this.showConfPass;
  }
  back(){
      this.router.navigateByUrl('/owner/ownerHome');
  }
  submit(){
    console.log(this.ownerSignupForm.value);
    let request={
      fullName:this.ownerSignupForm.value.fullName?.replace(/\s*/g," ").trim(),
      panNumber:this.ownerSignupForm.value.panNumber,
      username:this.ownerSignupForm.value.username,
      email:this.ownerSignupForm.value.email,
      contact:this.ownerSignupForm.value.contact,
      gender:this.ownerSignupForm.value.gender,
      password:this.ownerSignupForm.value.password,
      confirmPassword:this.ownerSignupForm.value.confirmPassword,
      id:this.ownerSignupForm.value.id,
    }
    this.commonApiCallService.postApiCall(this.journey,request).subscribe(resp=>{
      console.log(resp);
      this.postResponce=resp
      
    })
    //if (this.postResponce?.id) {
      this.router.navigateByUrl('owner/ownerSucess')
    //}
    
  }

}
