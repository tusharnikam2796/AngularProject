import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cityName!:string;
  starUrl='https://api.openweathermap.org/data/2.5/weather?q=';
  endUrl='&appid=52d3b81bfd1fd510a995582e75b5b87a&units=metric';

  constructor(private httpClient:HttpClient) { }

  getApiCall(cityName:string){
    let url= this.starUrl + cityName + this.endUrl;
    return this.httpClient.get(url);
  }
}
