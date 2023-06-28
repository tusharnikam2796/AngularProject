import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { StudentDataService } from '../student/student-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  userName!: string;
  jsonData={

    "admin": [{
      name: 'tushar',
      age: 26,
      mobNo: 7350375919
    }],
    "statusCode": 200,
    "massage": "pass"
  };
  //JSON: javascript object notification
  //without using string is a simple JSON
  //eg
  dataStu = {
    admin: [{
      name: 'tushar nikam',
      age: 26,
      mobNo: 7350375919
    }],
    statusCode: 200,
    massage: "pass",
    fevSub: ['maths', 'polity', 'eco']
  };
  constructor(private router: Router, private dataService: DataService, private studentDataService: StudentDataService) {
  }
  ngOnInit() {
    this.userName = this.dataService.userFullName;
    console.log(this.userName);
    this.studentDataService.data = this.jsonData;


  }



  login() {
    this.router.navigateByUrl('/login')
  }
  StudentActivity() {
    this.router.navigateByUrl('/student/studentActivty')

  }
  directives() {
    this.router.navigateByUrl('/directives')

  }
  lifeCycleHooks(){
    this.router.navigateByUrl('/lifeCycleHooks')
  }
  parent(){
    this.router.navigateByUrl('/parent')
  }
  child(){
    this.router.navigateByUrl('/child')


  }
  show(){
    console.log('without simple JSON:', this.dataStu);
    //strigify data
    let strigifyData=JSON.stringify(this.dataStu);
    console.log('strigify data:', strigifyData);
    //parse data
    let parsedata=JSON.parse(strigifyData);
    console.log('parsedata',parsedata);
    

    
    
  }


}
