import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  studentData:any;
  getData: any;


  constructor(private apiCallService:ApiCallService,private router:Router,private commonService:CommonService){}


  getList(){
    let endpoint = "studentRagistarion";
    this.apiCallService.getApiCall(endpoint).subscribe(data => {
      console.log(data);
      this.studentData = data;
  })
}
delete(id:number){
    let endpoint = "studentRagistarion";
    this.apiCallService.deleteApiCall(endpoint,id).subscribe(deleteData=>{
      console.log(deleteData);
  })
  this.router.navigateByUrl('studentList');
}
edit(id:number){
  this.router.navigateByUrl('contactForm');

  this.commonService.journey='update';
    let endpoint='studentRagistarion';
    this.apiCallService.getApiCall(endpoint).subscribe(response=>{
      this.getData=response;
      
    });
    if (this.getData) {
      this.commonService.getDataById=this.getData;
      this.router.navigateByUrl('contactForm');
      
    }
}

}
