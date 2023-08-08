import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-hotel-ragistration',
  templateUrl: './owner-hotel-ragistration.component.html',
  styleUrls: ['./owner-hotel-ragistration.component.scss']
})
export class OwnerHotelRagistrationComponent {

  hotelRagistrationForm!:FormGroup;
  editId: any;
  dataById: any;

  constructor(private formBulider:FormBuilder,private router:Router,private commonApiCallService:CommonApiCallService,
    private commonService:CommonService){}

  ngOnInit(){
    this.editId=this.commonService.id;
    this.dataById=this.commonService.dataById;

      this.myOwnerRagistration();

   

  }
  myOwnerRagistration(){
    this.hotelRagistrationForm=this.formBulider.group({
      ownerName:[this.dataById? this.dataById.ownerName :'',[Validators.required,Validators.minLength(5),Validators.pattern('[A-za-z ]*$')]],
      ownerContact:[this.dataById? this.dataById.ownerContact :'',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelName:[this.dataById? this.dataById.hotelName :'',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress:[this.dataById? this.dataById.hotelAddress :'',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact:[this.dataById? this.dataById.hotelContact :'',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelMenu:[this.dataById? this.dataById.hotelMenu :'',[Validators.required,]],
      roomsAvailable:[this.dataById? this.dataById.roomsAvailable :'',[Validators.required,Validators.pattern('[0-9]*$')]],
      roomClass:[this.dataById? this.dataById.roomClass :'',[Validators.required,]],
      ownerPassword:[this.dataById? this.dataById.ownerPassword :'',[Validators.required,]],
    })
  }

  back(){
    this.router.navigateByUrl('/owner/ownerSucess')
  }
  submitDetails(){
    let endpoint='hotelDetails';
    let request={
      ownerName:this.hotelRagistrationForm.value.ownerName,
      ownerContact:this.hotelRagistrationForm.value.ownerContact,
      hotelName:this.hotelRagistrationForm.value.hotelName,
      hotelAddress:this.hotelRagistrationForm.value.hotelAddress,
      hotelContact:this.hotelRagistrationForm.value.hotelContact,
      hotelMenu:this.hotelRagistrationForm.value.hotelMenu,
      roomsAvailable:this.hotelRagistrationForm.value.roomsAvailable,
      roomClass:this.hotelRagistrationForm.value.roomClass,
      ownerPassword:this.hotelRagistrationForm.value.ownerPassword,
    }
   if (this.editId) {
     this.commonApiCallService.patchApiCall(endpoint,request,this.editId).subscribe(resp=>{
      console.log(resp);
      
     })
   }else{
    this.commonApiCallService.postApiCall(endpoint,request).subscribe(resp=>{
      console.log(resp);
      })
   }
    this.router.navigateByUrl('owner/ownerSucess')
  }

  ngOnDestroy(){
    this.commonService.dataById='';
    this.commonService.id='';
   
  }

  
}
