import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-user-sucess',
  templateUrl: './user-sucess.component.html',
  styleUrls: ['./user-sucess.component.scss']
})
export class UserSucessComponent {
  hotelData:any;
  searchBoxValue:any;





  constructor(private router: Router, private commonService: CommonService, private commonApiCallService: CommonApiCallService) { }

  ngOnInit() {
     
  }


  async viewHotels() {
    let endpoint='hotelDetails'
    this.hotelData=await this.commonApiCallService.getApiCall(endpoint).toPromise()
    console.log(this.hotelData);
    
  }
  bookNow(){
    this.router.navigateByUrl('user/bookNow');
  }


  back() {

  }

}
