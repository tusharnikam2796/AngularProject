import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanApiCallService } from '../student/comman-api-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,private commanApiCallService:CommanApiCallService){

  }
  ngOnInit(){

  }
  back(){
    this.router.navigateByUrl('landing')
    
  }
  submit(formData:any){
    console.log(formData);
    let reqData={
      userName:formData.userName,
      password:formData.password,
      confPassword:formData.confPassword
    }
    let endpoint="student"
    this.commanApiCallService.postApiCall(endpoint,reqData).subscribe(res=>{
      console.log(res);
      
    })
    
  }
}
