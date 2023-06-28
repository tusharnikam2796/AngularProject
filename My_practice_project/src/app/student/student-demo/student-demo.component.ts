import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent {
  student={
    name:'tushar',
    city:'satara',
    gender:'male',
    age:26
  }

  constructor(private router:Router,private studentDataService:StudentDataService){}

  setData(){
    this.studentDataService.studentData=this.student;


  }
  callServiceFun(){
   let res=this.studentDataService.test(20,30);
    console.log(res);
    

  }

}
