import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.scss']
})
export class OwnerSignupComponent {

  ownerSignupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.ownerSignup();
  }

  ownerSignup(){
     this.ownerSignupForm=this.formBuilder.group({
      firstName:[],
      lastName:[],
      email:[],
      contact:[],
      gender:[],
      password:[],
      confirmPassword:[]
     })
  }

}
