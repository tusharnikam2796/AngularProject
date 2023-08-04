import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {

  adminLoginForm!:FormGroup;
  showPass!: boolean;

  constructor(private formBulider:FormBuilder,private router:Router){}

  ngOnInit(){
    this.myAdminForm()
  }
  myAdminForm(){
    this.adminLoginForm=this.formBulider.group({
      adminName:['',[]],
      password:['',[]]
    })
  }

  login(){

  }
  visiblepass(){
    this.showPass= !this.showPass
  }
  back(){
     this.router.navigateByUrl('')
  }

}
