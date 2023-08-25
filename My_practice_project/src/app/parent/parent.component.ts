import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData:any;
  valueChild:any;
  viewDataChild!:any;
  value='tushar';
  constructor(private dataService:DataService ){}

  set(){
    this.dataService.dataStr='tushar'
}
getData(value:any){
  console.log(value);
  this.valueChild=value;
}

}
