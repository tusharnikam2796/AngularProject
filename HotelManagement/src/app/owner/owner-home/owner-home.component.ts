import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
})
export class OwnerHomeComponent {
  ownerLoginForm!:FormGroup;
  showPass!: boolean;
  data: any;
  endpoint:any;
  ownerData: any;
  isValid: boolean=false;

  constructor(private router:Router , private formBulider:FormBuilder,private commonApiCallService:CommonApiCallService,
    private commonService:CommonService){}

  ngOnInit(){
   this.ownerLogin()
   this.endpoint=this.commonService.journey;
   console.log(this.endpoint);
   
   
  }

  ownerLogin(){
    this.ownerLoginForm=this.formBulider.group({
      username:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]{3,}$'),Validators.minLength(2)]],
      password:['',[Validators.required]]
    })

  }

  login(){
    // this.router.navigateByUrl('/owner/ownerSucess')
    console.log(this.ownerLoginForm.value);
    
     this.getOwnerData();
     if(this.ownerData){
      this.validUser();
      if(this.isValid){
          this.router.navigateByUrl('/owner/ownerSucess')
      }else{
        this.router.navigateByUrl('/owner/ownerHome')
      }
     }


  }
  // ownerSignup(){
  //   this.router.navigateByUrl('/owner/ownerSignup')
  // }
  back(){
    this.router.navigateByUrl('home')
  }
  visiblepass(){
    this.showPass=!this.showPass;
  }
  userInput(){
    this.data=this.ownerLoginForm.value.username
    console.log('data',this.data);
    
  }
  getOwnerData(){
     this.commonApiCallService.getApiCall(this.endpoint).subscribe(resp=>{
      console.log(resp);
      this.ownerData=resp;
    })
     console.log(this.ownerData);
  }
  validUser(){
     this.ownerData.forEach((element:any)=>{
      if (element.username === this.ownerLoginForm.value.username && element.password === this.ownerLoginForm.value.password) {
        this.isValid= true
      }
     });
     return;
  }

}
