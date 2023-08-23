import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  searchBoxValue:any;
  weatherData: any;
  temperature: any;
  max_temp: any;
  min_temp: any;
  humidity: any;
  windSpeed: any;
  city: any;
  error: any;


  constructor(private commonService:CommonService){}

  ngOnInit(){
    console.log( this.searchBoxValue);
    this.searchBoxValue=this.commonService.cityName;
  }

 getData(){
    this.commonService.getApiCall(this.searchBoxValue).subscribe(resp=>{
     this.weatherData=resp;
     console.log(this.weatherData);
     if(this.weatherData){
     this.temperature = this.weatherData.main.temp;
      this.max_temp = this.weatherData.main.temp_max;
      this.min_temp = this.weatherData.main.temp_min;
      this.humidity = this.weatherData.main.humidity;
      this.windSpeed = this.weatherData.wind.speed;
      this.city = this.weatherData.name;
    }
    })
    // this.weatherData=await this.commonService.getApiCall(this.searchBoxValue).toPromise();
    // this.temperature = this.weatherData.main.temp;
    //   this.max_temp = this.weatherData.main.temp_max;
    //   this.min_temp = this.weatherData.main.temp_min;
    //   this.humidity = this.weatherData.main.humidity;
    //   this.windSpeed = this.weatherData.wind.speed;
    //   this.city = this.weatherData.name;
  }

}
