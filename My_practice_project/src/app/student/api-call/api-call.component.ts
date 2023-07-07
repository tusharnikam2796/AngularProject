import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { StudentDataService } from '../student-data.service';
import { CommanApiCallService } from '../comman-api-call.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent {
  signUpForm!: FormGroup;
  stData:any;
  postApiResponse={
    statusCode:1000,
    status:"sucess",
    massage:"data submitted sucessfully"
  };
  studentName:any;


  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router: Router,private studentDataService:StudentDataService,
    private commanApiCallService:CommanApiCallService ) {

  }
  ngOnInit(){
    this.signUpFormControlls();
  }
  signUpFormControlls(){
    this.signUpForm=this.formBuilder.group({
      fullname:['',[Validators.required,Validators.pattern("[A-Za-z ]*$"),Validators.maxLength(20),this.studentDataService.whiteSpaceValidators]],
      email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)]],
      contact:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      address:[''],
      state:[''],
      gender:['Male']


    })

}
submit(){
  console.log(this.signUpForm.value);
  let endpoint="post";
  this.commanApiCallService.postApiCall(endpoint, this.signUpForm.value).subscribe(response=>{
         
  })
  if(this.postApiResponse.statusCode===1000){
    alert(this.postApiResponse.massage);
    this.signUpForm.reset()
  }
}
inpValue(){
  console.log(this.studentName);
  let reqData={
    "studentName":this.studentName
  }
  let urlendpoint="admin"
  if(this.studentName.length > 2){
  this.commanApiCallService.postApiCall(urlendpoint,reqData).subscribe(resp=>{
   console.log(resp);
   
  })
}
  
}
}
