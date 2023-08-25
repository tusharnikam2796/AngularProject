import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Subject2Component } from '../subject2/subject2.component';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
  
  // @ViewChild('headlineTag') headline!: ElementRef;
  // @ViewChild (Subject2Component) sub2Comp!:Subject2Component;
  // name!: string;
  nameFromSub3!: string;


  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.name.subscribe(data=>{
      this.nameFromSub3=data
    })
  }
//   ngAfterViewInit(){
//     console.log('ngAfterViewInit...');
//     console.log(this.headline.nativeElement);
//     this.headline.nativeElement.innerHTML='tushar..';
//     this.name=this.sub2Comp.surName;

//  }


}
