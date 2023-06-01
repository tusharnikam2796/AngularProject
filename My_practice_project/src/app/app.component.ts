import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My_practice_project';
  firstName : string = "tushar";
  firstName1 = "tushar";
  firstName2! : string;
  surName : any;
  formTitle:string="login form";
  studentName="tushar";
  amount=55000;
  isFevCity=true;
  myName="tushar";
  gender=true;
  isDisabled= false;
  eventBindingData=80000;
  twoWayBindingData=789456;


  testingInterpolation ( a:number, b: number){
    
     return a + b;
  }

  testingEventBinding(){
    this.eventBindingData=20000;
    console.log(this.eventBindingData);
    

  }
  test(){
    console.log(this.twoWayBindingData);
  }



}
