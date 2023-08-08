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
  showTable!:boolean;
  dataById: any;

  constructor(private router: Router, private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) { }

  ngOnInit() {
    console.log('onInit calling..');
    this.userName = this.commonService.userName;
  }
  hotelRgistration() {
    this.router.navigateByUrl('/owner/ownerHotelRagistration');
  }

 async hotelList() {
  this.showTable=!this.showTable;
    let endpoint = 'hotelDetails';
    // this.commonApiCallService.getApiCall(endpoint).subscribe(resp => {
    //   console.log(resp);
    //   this.hotelData = resp;

    // })
    this.hotelData=await this.commonApiCallService.getApiCall(endpoint).toPromise();
    
    console.log('hotelData', this.hotelData);
    if (this.hotelData) {
      this.hotelDetailsByOwner();
      if(this.userHotelDetails.length>0){

      }else{
        this.commonService.warningToster('warning','no any hotel available');
      }
    }else{
      alert('no owner data available')
    }
  }
  hotelDetailsByOwner() {
    this.userHotelDetails=[]
    this.hotelData.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element);
      }
    })
    console.log('userHotelDetails', this.userHotelDetails);

  }
  async edit(id:number){
    this.commonService.id=id;
    
      let endpoint='hotelDetails';
       this.dataById =await this.commonApiCallService.getApiCall(endpoint,id).toPromise()
       this.commonService.dataById=this.dataById;
       this.router.navigateByUrl('owner/ownerHotelRagistration')


  }
  async delete(id:number){
    let endpoint='hotelDetails'
      await this.commonApiCallService.deleteApiCall(endpoint,id).toPromise();
      this.showTable=!this.showTable;
      this.hotelList() ;
  }
}
