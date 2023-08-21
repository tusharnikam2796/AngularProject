import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { CommonApiCallService } from '../common/common-api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showLogout:boolean=false;
  hotelData: any;

constructor(private router:Router,private commonService:CommonService,private commonApiCallService:CommonApiCallService){}

ngOnInit(){
  let endpoint='hotelDetails'
   this.commonApiCallService.getApiCall(endpoint).subscribe(resp=>{
    console.log(resp);
    this.hotelData=resp;
    
   })
}
  


journey(journey:string){
  this.showLogout=true;
     if (journey==='admin') {
      this.commonService.journey='admin';
      this.router.navigateByUrl('admin');
     }
     else if(journey==='owner'){
      this.commonService.journey='owner';
      this.router.navigateByUrl('owner');
     }else{
      this.commonService.journey='user';
      this.router.navigateByUrl('user');
     }
  }
}
