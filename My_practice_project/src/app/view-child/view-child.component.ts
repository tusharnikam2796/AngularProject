import { Component, ElementRef, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

@ViewChild ('headingTag') heading!:ElementRef;
@ViewChild (Child1Component) child1Comp!:Child1Component;
name!: string;


ngAfterViewInit(){
  console.log(this.heading.nativeElement);
  this.heading.nativeElement.innerHTML='tushar...';
  console.log(this.child1Comp.surName);
  this.name=this.child1Comp.surName;
  

}
}
