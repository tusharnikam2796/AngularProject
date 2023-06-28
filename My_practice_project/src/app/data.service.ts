import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userFullName!:string;
  dataStr:any;

  constructor() { }
  
}
