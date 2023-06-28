import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent {
  signInForm!: FormGroup;
  showForm: boolean = false;
  inpPassword: any;
  inpConfPassord: any;
  match!: boolean;
  showPassword!:boolean;
  stuData:any;
  constructor(private fb: FormBuilder,private studentDataService:StudentDataService) { }
  getData(){
   this.stuData =this.studentDataService.studentData
   console.log(this.stuData );
   let a=this.studentDataService.test(25,5);
   console.log(a);
   
   
  }

  show() {
    //this.showForm = true;
    this.showForm = !this.showForm 
    this.signInForm = this.fb.group({
      password: [],
      confirmPassword: [],
      name:['',[this.nameValidation,this.studentDataService.whiteSpaceValidators]]
      

    })
    

  }
  whiteSpaceValidators(name:any){
    let data=name.value;
    let newdata= data ?.trim();
    let isvalid= data.length != newdata.length;
    return isvalid ?{whiteSpace:true} : null

  }

  nameValidation(inp:any){
    console.log(inp.value);
    let data=inp.value?.toLowerCase();
    let isErr=data.includes('copy');
    return isErr ? {Err : true}: null;
    

  }
  passwordValue() {
    console.log(".....", this.signInForm.value.password);
    this.inpPassword = this.signInForm.value.password;
    if (this.inpPassword == this.inpConfPassord) {
      this.match = true;
    }
    else {
      this.match = false;
    }

  }
  confPasswordValue() {
    this.inpConfPassord = this.signInForm.value.confirmPassword;
    if (this.inpPassword == this.inpConfPassord) {
      this.match = true;
    }
    else {
      this.match = false;
    }

  }
  showpass(){
    this.showPassword=!this.showPassword

  }


}
