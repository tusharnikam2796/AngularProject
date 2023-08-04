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
  ownerLoginForm!: FormGroup;
  ownerForgetPasswordForm!: FormGroup;
  showPass!: boolean;
  data: any;
  endpoint: any;
  ownerData: any;
  isValid: boolean = false;
  showForgetPasswordForm: boolean = false;
  forgetPass: boolean = false;
  userName: any;


  constructor(private router: Router, private formBulider: FormBuilder, private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.ownerLogin();
    this.ownerForgetPass();
    this.endpoint = this.commonService.journey;
    console.log(this.endpoint);
    this.userName = this.commonService.userName;
    this.forgetPass = this.commonService.forgetPass;
    console.log('this.forgetPass', this.forgetPass);

    this.getOwnerData();
  }

  ownerLogin() {
    this.ownerLoginForm = this.formBulider.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]{3,}$'), Validators.minLength(2)]],
      password: ['', [Validators.required]]
    })

  }

  ownerForgetPass() {
    this.ownerForgetPasswordForm = this.formBulider.group({
      newPassword: ['', []],
      confirmPassword: ['', []],
      reConfirmPassword: ['', []],
    })
  }

  login() {
    // this.router.navigateByUrl('/owner/ownerSucess')
    console.log(this.ownerLoginForm.value);
    if (this.ownerLoginForm.value.username) {
      this.commonService.userName = this.ownerLoginForm.value.username;
    }


    if (this.ownerData) {
      // this.validUser
      this.ownerData.find((element: any) => {
        if (element.username === this.ownerLoginForm.value.username && element.password === this.ownerLoginForm.value.password) {
          this.isValid = true
        }

      })
      if (this.isValid) {
        this.router.navigateByUrl('/owner/ownerSucess')
      } else {
        // alert('username or password is incorrect')
        this.commonService.errorToster('error','incorrect password');
        this.commonService.forgetPass = true;
        this.router.navigateByUrl('/owner/ownerHome')
      }
    }


  }
  // ownerSignup(){
  //   this.router.navigateByUrl('/owner/ownerSignup')
  // }
  back() {
    this.router.navigateByUrl('home')
  }
  visiblepass() {
    this.showPass = !this.showPass;
  }
  userInput() {
    this.data = this.ownerLoginForm.value.username
    console.log('data', this.data);

  }
  async getOwnerData() {
    //  this.commonApiCallService.getApiCall(this.endpoint).subscribe(resp=>{
    //   console.log(resp);
    //   this.ownerData=resp;
    // })
    this.ownerData = await this.commonApiCallService.getApiCall(this.endpoint).toPromise();
    console.log('this.ownerData', this.ownerData);
  }
  // validUser(){
  //    this.ownerData.forEach((element:any)=>{
  //     if (element.username === this.ownerLoginForm.value.username && element.password === this.ownerLoginForm.value.password) {
  //       this.isValid= true
  //     }
  //    });
  //    return;
  // }
  forgetPassword() {
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.ownerForgetPass();
  }
  submit() {
    this.updatePassword();
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgetPass = false;
  }
  async updatePassword() {
    var user: any;
    this.ownerData.forEach((data: any) => {
      if (data.username == this.userName) {
        user = data;
      }
    })
    if (user) {
      let request = {
        password: this.ownerForgetPasswordForm.value.newPassword,
      }
      // this.commonApiCallService.patchApiCall(this.endpoint,request,user.id).subscribe((resp:any)=>{
      //   console.log(resp);

      // })
      await this.commonApiCallService.patchApiCall(this.endpoint, request, user.id).toPromise();

    }
    else{
      alert('user does not exists');
      
    }
  }

}
