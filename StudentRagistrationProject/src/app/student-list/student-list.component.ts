import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  studentData:any;


  constructor(private apiCallService:ApiCallService,private router:Router){}


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
}

}
