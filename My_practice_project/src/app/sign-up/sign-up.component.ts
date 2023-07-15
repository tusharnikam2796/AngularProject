import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { StudentDataService } from '../student/student-data.service';
import { CommanApiCallService } from '../student/comman-api-call.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  stData:any;
  postUrlData: any;
  getDataById: any;
  journey!:string;

  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router: Router,private studentDataService:StudentDataService,
    private commanApiCallService:CommanApiCallService) {

  }
  ngOnInit(){
    this.getDataById=this.commanApiCallService.getDataById;
    this.journey=this.commanApiCallService.journey;
    console.log(this.getDataById);
    
    this.signUpFormControlls();
    this.stData=this.studentDataService.data;
    console.log(this.stData);
    

  }
  signUpFormControlls(){
    this.signUpForm=this.formBuilder.group({
      fullname:[this.getDataById?.fullname ? this.getDataById.fullname : '',[Validators.required,Validators.pattern("[A-Za-z ]*$"),Validators.maxLength(20),this.studentDataService.whiteSpaceValidators]],
      email:[this.getDataById?.email ? this.getDataById.email : '',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)]],
      contact:[this.getDataById?.contact ? this.getDataById.contact : '',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      address:[this.getDataById?.address ? this.getDataById.address : ''],
      state:[this.getDataById?.state ? this.getDataById.state : ''],
      gender:[this.getDataById?.gender ? this.getDataById.gender : ''],
      password:[this.getDataById?.password ? this.getDataById.password : ''],
      confPassword:[this.getDataById?.confPassword ? this.getDataById.confPassword : '']


    })

  }
  submit(){
    console.log(this.signUpForm.value);
    this.dataService.userFullName=this.signUpForm.value.fullname;
    
    let signUpRequest={
      fullname:this.signUpForm.value.fullname,
      email:this.signUpForm.value.email,
      contact:this.signUpForm.value.contact,
      address:this.signUpForm.value.address,
      state:this.signUpForm.value.state,
      gender:this.signUpForm.value.gender,
      password:this.signUpForm.value.password,
      confPassword:this.signUpForm.value.confPassword,

    }
    let signUrl='owner';
    if(this.journey!='update'){
      this.commanApiCallService.postApiCall(signUrl,signUpRequest).subscribe(resp=>{
        this.postUrlData=resp
        console.log(resp);
        })
      
    }else{
      this.commanApiCallService.putApiCall(signUrl,signUpRequest,5).subscribe(resp=>{
        console.log(resp);
        
      })

    }
   
    this.router.navigateByUrl('landing')
    
  }

}
