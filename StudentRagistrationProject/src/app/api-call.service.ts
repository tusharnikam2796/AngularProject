import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  commonUrl='http://localhost:3000/'
  constructor(private httpClient:HttpClient) { }

  postApiCall(endpoint:string,formData:any){
    let url=this.commonUrl + endpoint ;
    return this.httpClient.post(url,formData);
  }

  getApiCall(endpoint:string,id?:number){
    let url= id? this.commonUrl+endpoint+'/'+ id : this.commonUrl+endpoint;
    return this.httpClient.get(url);
  }
  patchApiCall(endpoint:string,data:any,id:number){
      let url=this.commonUrl+endpoint + '/' + id ;
    return this.httpClient.patch(url,data);
  }
  deleteApiCall(endpoint:string,id:number){
    let url=this.commonUrl+endpoint+'/'+id;
    return this.httpClient.delete(url);
  }

  putApiCall(endpoint:any,signUpRequest:any,id?:any){
    let url=this.commonUrl+endpoint+'/'+id;
    return this.httpClient.put(url,signUpRequest);

  }

}
