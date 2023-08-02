import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  journey!:any;
  userName!:any;
  forgetPass!:boolean;

  constructor(private toastrService:ToastrService) { }

  whiteSpaceValidator(name:any){
    let data = name.value;
    let newData=data?.trim();
    let valid=data.length != newData.length;
    return valid? {whiteSpace:true} : null

  }

  warningToster(title:any,msg:any){
    return this.toastrService.error(title,msg);
  }
}
