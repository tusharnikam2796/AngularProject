import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  journey!:any;
  constructor() { }

  whiteSpaceValidator(name:any){
    let data = name.value;
    let newData=data?.trim();
    let valid=data.length != newData.length;
    return valid? {whiteSpace:true} : null

  }
}
