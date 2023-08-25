import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {
  nameFromSub2!: string;
  surName='nikam';


  constructor(private dataService:DataService){}
    
  ngOnInit(){
    this.dataService.name.subscribe(data=>{
      this.nameFromSub2=data
    })
  }
}
