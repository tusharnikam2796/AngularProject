import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  journey!:any;
  userName!:any;
  forgetPass!:boolean;
  id: any;
  dataById: any;

  constructor(private toastrService:ToastrService) { }

  whiteSpaceValidator(name:any){
    let data = name.value;
    let newData=data?.trim();
    let valid=data.length != newData.length;
    return valid? {whiteSpace:true} : null

  }

  errorToster(title:any,msg:any){
    return this.toastrService.error(title,msg);
  }
  warningToster(title:any,msg:any){
return this.toastrService.warning(title,msg);
  }
}
