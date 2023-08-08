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
  showPass!: boolean;
  getJourney: any;
  adminData: any;
  validAdmindata!: boolean;

  constructor(private formBulider: FormBuilder, private router: Router, private commonService: CommonService, private commonApiCallService: CommonApiCallService) { }

  ngOnInit() {
    this.myAdminForm();
    this.getJourney = this.commonService.journey;
    this.getAdmindata();
  }

  myAdminForm() {
    this.adminLoginForm = this.formBulider.group({
      adminName: ['', []],
      password: ['', []]
    })
  }


  login() {
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
    this.adminData = await this.commonApiCallService.getApiCall(this.getJourney).toPromise();
    console.log('this.adminData', this.adminData);

  }


}
