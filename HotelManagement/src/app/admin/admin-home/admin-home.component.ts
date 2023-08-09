import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {

  adminLoginForm!: FormGroup;
  adminForgetPasswordForm!:FormGroup;
  showPass!: boolean;
  endpoint: any;
  adminData: any;
  validAdmindata!: boolean;
  showForgetPasswordForm:boolean=false;
  forgetPass: boolean=false;
  adminName: any;

  constructor(private formBulider: FormBuilder, private router: Router, private commonService: CommonService, private commonApiCallService: CommonApiCallService) { }

  ngOnInit() {
    this.myAdminForm();
    this.endpoint = this.commonService.journey;
    this.getAdmindata();
    this.adminName=this.commonService.adminName;
    this.forgetPass = this.commonService.forgetPass;
  }

  myAdminForm() {
    this.adminLoginForm = this.formBulider.group({
      adminName: ['', []],
      password: ['', []]
    })
  }

  adminForgetForm(){
    this.adminForgetPasswordForm=this.formBulider.group({
      newPassword: ['', []],
      confirmPassword: ['', []],
      reConfirmPassword: ['', []],
    })
  }


  login() {
    if (this.adminLoginForm.value.adminName) {
      this.commonService.adminName = this.adminLoginForm.value.adminName;
    }


    if (this.adminData) {
      this.adminData.find((element:any)=>{
        if (element.adminName===this.adminLoginForm.value.adminName && element.password===this.adminLoginForm.value.password) {
          this.validAdmindata=true
        }
      })
      if (this.validAdmindata) {
        this.router.navigateByUrl('admin/adminSucess');
      }else{
        alert('password is wrong');
        this.commonService.forgetPass=true;
        this.router.navigateByUrl('admin/adminHome')
        
      }
    }

  }
  visiblepass() {
    this.showPass = !this.showPass
  }
  back() {
    this.router.navigateByUrl('')
  }
  async getAdmindata() {
    this.adminData = await this.commonApiCallService.getApiCall(this.endpoint).toPromise();
    console.log('this.adminData', this.adminData);

  }

  forgetPassword(){
    this.showForgetPasswordForm=!this.showForgetPasswordForm;
    this.adminForgetForm();

  }
  submit(){
     this.updateForm();
     this.showForgetPasswordForm=!this.showForgetPasswordForm;
     this.forgetPass = false;
  }
  async updateForm(){
     var admin:any;
    this.adminData.find((element:any)=>{
      if(element.adminName==this.adminName){
         admin=element
      }
     })
     if(admin){
       let request={
        password:this.adminForgetPasswordForm.value.newPassword
       }
        await this.commonApiCallService.patchApiCall(this.endpoint,request,admin.id).toPromise()

     }else{
      this.commonService.warningToster('warning','user does not exist');
     }
    

  }


}
