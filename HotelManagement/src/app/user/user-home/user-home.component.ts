import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
  userLoginForm!: FormGroup;
  userForgetPasswordForm!: FormGroup;
  showPassword!: boolean;
  endpoint: any;
  userData: any;
  validUser!: boolean;
  showForgetPasswordForm: boolean = false;
  forgetPass: boolean = false;
  selfUserName: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private commonService: CommonService, private commonApiCallService: CommonApiCallService) { }

  ngOnInit() {
    this.myUserLoginForm();
    this.endpoint = this.commonService.journey;
    this.getUserdata();
    this.forgetPass = this.commonService.forgetPass;
    this.selfUserName = this.commonService.selfUserName;
  }
  myUserLoginForm() {
    this.userLoginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]{3,}$'), Validators.minLength(2)]],
      password: ['', [Validators.required]]
    })
  }
  myForgetPasswordForm() {
    this.userForgetPasswordForm = this.formBuilder.group({
      newPassword: ['', []],
      confirmPassword: ['', []],
      reConfirmPassword: ['', []]


    })
  }

  login() {
    if (this.userLoginForm.value.adminName) {
      this.commonService.selfUserName = this.userLoginForm.value.userName;
    }

    if (this.userData) {
      this.userData.find((element: any) => {
        if (element.userName === this.userLoginForm.value.userName && element.password === this.userLoginForm.value.password) {
          this.validUser = true;
        }
      })
      if (this.validUser) {
        this.commonService.sucessToster('sucess','Sucessfully Login')
        this.router.navigateByUrl('user/userSucess');
      } else {
        this.commonService.errorToster('error','incorrect password');
        this.commonService.forgetPass = true;
        this.router.navigateByUrl('user/userHome');
      }
    }


  }
  visiblepass() {
    this.showPassword = !this.showPassword;
  }
  back() {
    this.router.navigateByUrl('')
  }

  async getUserdata() {
    this.userData = await this.commonApiCallService.getApiCall(this.endpoint).toPromise()
  }

  submit() {
    this.updateForm();
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgetPass = false;
  }

  forgetPassword() {
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.myForgetPasswordForm();
  }
  async updateForm() {
    var user: any;
    this.userData.find((element: any) => {
      if (element.adminName == this.selfUserName) {
        user = element
      }
    })
    if (user) {
      let request = {
        password: this.userForgetPasswordForm.value.newPassword,
        confirmPassword: this.userForgetPasswordForm.value.confirmPassword
      }
      await this.commonApiCallService.patchApiCall(this.endpoint, request, user.id).toPromise()

    } else {
      this.commonService.warningToster('warning', 'user does not exist');
    }


  }

}
