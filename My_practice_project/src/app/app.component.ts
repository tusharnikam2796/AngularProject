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

  testingInterpolation ( a:number, b: number){
    
     return a + b;
  }



}
