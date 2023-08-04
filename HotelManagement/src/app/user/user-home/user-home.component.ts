import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
    userLoginForm!:FormGroup;
  showPassword!: boolean;
  getjouney: any;
  userData: any;
  validUser!: boolean;

    constructor(private formBuilder:FormBuilder,private router:Router,
      private commonService:CommonService, private commonApiCallService:CommonApiCallService){}

    ngOnInit(){
      this.myUserLoginForm();
      this.getjouney=this.commonService.journey;
      this.getUserdata();
    }
    myUserLoginForm(){
      this.userLoginForm=this.formBuilder.group({
        userName:['',[]],
        password:['',[]]
      })
    }
    login(){
      if(this.userData){
        this.userData.find((element:any)=>{
          if(element.userName===this.userLoginForm.value.userName && element.password===this.userLoginForm.value.password){
            this.validUser=true;
          }
        })
        if(this.validUser){
            this.router.navigateByUrl('');
        }else{
            alert('password is wrong');
            this.router.navigateByUrl('user/userHome');
        }
      }


    }
    visiblepass(){
      this.showPassword=!this.showPassword;
    }
    back(){
      this.router.navigateByUrl('')
    }

    async getUserdata(){
    this.userData=await this.commonApiCallService.getApiCall(this.getjouney).toPromise()
    }

}
