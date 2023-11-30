import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  signUpForm!: FormGroup;
  registrationFees:string='';
  collegeFees:string='';
  examFees:string='';

  totalFees:number=0;
  postUrlData: any;
  journey: any;
  getDataById: any;
  
  

constructor(private formBuilder:FormBuilder,private apiCallService:ApiCallService,private router:Router,private commonService:CommonService){}
ngOnInit(){
  this.getDataById=this.commonService.getDataById;
  this.journey=this.commonService.journey;
  this.signUpFormControlls();
}
signUpFormControlls(){
  this.signUpForm=this.formBuilder.group({
    name:[this.getDataById?.name ? this.getDataById.name :'',[Validators.required,Validators.pattern("[A-Za-z ]*$"),Validators.maxLength(20)]],
    email:[this.getDataById?.email ? this.getDataById.email :'',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)]],
    contact:[this.getDataById?.contact ? this.getDataById.contact :'',[Validators.required,Validators.pattern("[0-9]{10}$")]],
    address:[this.getDataById?.address ? this.getDataById.address :'',Validators.required],
    birthDate:[this.getDataById?.birthDate ? this.getDataById.birthDate :'',Validators.required],
    gender:[this.getDataById?.gender ? this.getDataById.gender :'',Validators.required],
    ragistrationFees:[this.getDataById?.ragistrationFees ? this.getDataById.ragistrationFees :'',],
    collageFees:[this.getDataById?.collageFees ? this.getDataById.collageFees :'',],
    ExamFees:[this.getDataById?.ExamFees ? this.getDataById.ExamFees :'',],
    totalFees:[this.getDataById?.totalFees ? this.getDataById.totalFees :'',],
    passingYear:[this.getDataById?.passingYear ? this.getDataById.passingYear :'',]



  })

}
save(){
  let signUpRequest={
    name:this.signUpForm.value.name,
    email:this.signUpForm.value.email,
    contact:this.signUpForm.value.contact,
    address:this.signUpForm.value.address,
    birthDate:this.signUpForm.value.birthDate,
    gender:this.signUpForm.value.gender,
    ragistrationFees:this.signUpForm.value.ragistrationFees,
    collageFees:this.signUpForm.value.collageFees,
    ExamFees:this.signUpForm.value.ExamFees,
    totalFees:this.signUpForm.value.totalFees,
    passingYear:this.signUpForm.value.passingYear,


    

  }
  let signUrl='studentRagistarion';
  if(this.journey!='upddate'){
    this.apiCallService.postApiCall(signUrl,signUpRequest).subscribe(resp=>{
      this.postUrlData=resp
      console.log(resp);
      })
  }else{
    this.apiCallService.putApiCall(signUrl,signUpRequest).subscribe(resp=>{
      console.log(resp);
      
    })
  }
 
    this.router.navigateByUrl('');
  
}
// fees = {
//   registration:0,
//   college:0,
//   exam:0
// };


// calculateTotalFees() {
//   this.totalFees = this.fees.registration +this.fees.college+ this.fees.exam;
// }
calculateTotalFees(){
  this.totalFees = parseInt(this.registrationFees) + parseInt(this.collegeFees) + parseInt (this.examFees);
}
}
