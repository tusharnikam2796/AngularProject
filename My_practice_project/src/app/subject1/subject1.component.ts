import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {
    name='tushar';

  constructor(private dataService:DataService){}

  setData(){
    this.dataService.name.next(this.name);
  }

}
