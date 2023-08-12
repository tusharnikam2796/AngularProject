import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-admin-sucess',
  templateUrl: './admin-sucess.component.html',
  styleUrls: ['./admin-sucess.component.scss']
})
export class AdminSucessComponent {
  hotelDataList: any;
  showTable!:boolean;
  searchBoxValue:any;


constructor(private formBuilder:FormBuilder, private router:Router,private commonService:CommonService, private commonApiCallService:CommonApiCallService ){}

  back(){
      this.router.navigateByUrl('admin/adminHome');
  }
 async hotelList(){
    let endpoint='hotelDetails'
    this.showTable=!this.showTable;
    this.hotelDataList= await this.commonApiCallService.getApiCall(endpoint).toPromise();
    console.log('this.hotelDataList',this.hotelDataList);
    
  }

  async delete(id:number){
    let endpoint='hotelDetails'
    await this.commonApiCallService.deleteApiCall(endpoint,id).toPromise();
    this.showTable=!this.showTable;
    this.hotelList();
  }

}
