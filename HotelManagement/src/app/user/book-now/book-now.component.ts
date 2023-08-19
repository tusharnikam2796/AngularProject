import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent {
  bookNowForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private commonApiCallService:CommonApiCallService,
    private commonService:CommonService){}

ngOnInit(){
  this.myBookNowForm()
}
myBookNowForm(){
  this.bookNowForm=this.formBuilder.group({
    fullName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(2)]],
    contact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$')]],
    adharNumber:['',[Validators.required]],
    roomClass:['',[Validators.required]],
    paymentMethod:['',[Validators.required]],
    amount:['',[Validators.required]],
  })
}

back(){
  this.router.navigateByUrl('user/userSucess');
}
submitDetails(){
 let endpoint='hotelBooking';
 let request={
  fullName:this.bookNowForm.value.fullName,
  contact:this.bookNowForm.value.contact,
  email:this.bookNowForm.value.email,
  adharNumber:this.bookNowForm.value.adharNumber,
  roomClass:this.bookNowForm.value.roomClass,
  paymentMethod:this.bookNowForm.value.paymentMethod,
  amount:this.bookNowForm.value.amount,
 }
  this.commonApiCallService.postApiCall(endpoint,request).subscribe(resp=>{
    console.log(resp);
    
  })
  this.router.navigateByUrl('');
}



}
