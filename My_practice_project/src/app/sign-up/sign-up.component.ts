import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { StudentDataService } from '../student/student-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  stData:any;

  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router: Router,private studentDataService:StudentDataService) {

  }
  ngOnInit(){
    this.signUpFormControlls();
    this.stData=this.studentDataService.data;
    console.log(this.stData);
    

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
    this.dataService.userFullName=this.signUpForm.value.fullname;
    this.router.navigateByUrl('landing')
    
  }

}
