import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
 studentData:any;
 data:any;


  constructor() { }

  whiteSpaceValidators(name:any){
    let data=name.value;
    let newdata= data ?.trim();
    let isvalid= data.length != newdata.length;
    return isvalid ?{whiteSpace:true} : null

  }

  test(a:number,b:number){
    return a*b;

  }
}
