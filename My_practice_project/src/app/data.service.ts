import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  userFullName!:string;
  dataStr:any;
  name = new Subject<string>();

  constructor() { }
  
}
