import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-sucess',
  templateUrl: './owner-sucess.component.html',
  styleUrls: ['./owner-sucess.component.scss']
})
export class OwnerSucessComponent {

  tableHeading: any[] = ['HotelName', 'HotelAddress', 'OwnerContact', 'HotelContact', 'RoomsAvailability'];
  hotelData: any;
  userName!: string;
  userHotelDetails: any[] = [];

  constructor(private router: Router, private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) { }

  ngOnInit() {
    console.log('onInit calling..');
    this.userName = this.commonService.userName;
  }
  hotelRgistration() {
    this.router.navigateByUrl('/owner/ownerHotelRagistration');
  }

  hotelList() {
    let endpoint = 'hotelDetails';
    this.commonApiCallService.getApiCall(endpoint).subscribe(resp => {
      console.log(resp);
      this.hotelData = resp;

    })
    console.log('hotelData', this.hotelData);
    if (this.hotelData) {
      this.hotelDetailsByOwner();
    }
  }
  hotelDetailsByOwner() {
    this.hotelData.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element);
      }
    })
    console.log('userHotelDetails', this.userHotelDetails);

  }
}
