import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
commonUrl='http://localhost:3000/'
  constructor(private httpClient:HttpClient) { }

  postApiCall(endpoint:string,formData:any){
    let url=this.commonUrl + endpoint ;
    return this.httpClient.post(url,formData);
  }
}
