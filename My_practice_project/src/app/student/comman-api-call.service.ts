import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanApiCallService {
  url = "http://localhost:3000/";
  getDataById: any;
  journey!: string;
  // postUrl="http://localhost:3000/posts";
  // studentUrl="http://localhost:3000/studentData";

  constructor(private httpClient: HttpClient) { }
  //   postApiCall(formData:any){
  //     return this.httpClient.post(this.postUrl,formData)

  //   }
  //   studentApi(data:any){
  //     return this.httpClient.post(this.studentUrl,data)
  //   }
  postApiCall(endpoint: string, data: any) {
    let apiUrl = this.url + endpoint;
    return this.httpClient.post(apiUrl, data);

  }
  getApiCall(endpoint: any) {
    let apiUrl = this.url + endpoint;
    return this.httpClient.get(apiUrl)
  }
  getApiById(endpoint:string,id?:any){
    let idByUrl=id? this.url+endpoint+'/'+id : this.url + endpoint;
    return this.httpClient.get(idByUrl)
  }
  deleteApiById(id:any,endpoint:string){
    let deleteId=this.url+endpoint+'/'+id;
    return this.httpClient.delete(deleteId)
  }
  putApiCall(endpoint:any,signUpRequest:any,id:any){
    let url=this.url+endpoint+'/'+id;
    return this.httpClient.put(url,signUpRequest);

  }


}
