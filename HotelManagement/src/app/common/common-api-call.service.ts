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

  getApiCall(endpoint:string){
    let url=this.commonUrl+endpoint;
    return this.httpClient.get(url);
  }
  patchApiCall(endpoint:string,data:any,id:number){
      let url=this.commonUrl+endpoint + '/' + id ;
    return this.httpClient.patch(url,data);
  }

}
