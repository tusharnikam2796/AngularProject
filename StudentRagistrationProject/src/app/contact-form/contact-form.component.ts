import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';

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
  

constructor(private formBuilder:FormBuilder,private apiCallService:ApiCallService,private router:Router){}
ngOnInit(){
  this.signUpFormControlls();
}
signUpFormControlls(){
  this.signUpForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.pattern("[A-Za-z ]*$"),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)]],
    contact:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
    address:['',Validators.required],
    birthDate:['',Validators.required],
    gender:['',Validators.required],
    ragistrationFees:['',],
    collageFees:['',],
    ExamFees:['',],
    totalFees:['',],
    passingYear:['',]



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
  
  this.apiCallService.postApiCall(signUrl,signUpRequest).subscribe(resp=>{
    this.postUrlData=resp
    console.log(resp);
    })
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
