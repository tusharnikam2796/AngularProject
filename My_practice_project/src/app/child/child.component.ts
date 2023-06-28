import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  data!:string;
  @Input() dataFromParent:any;
  @Output() dataFromChild=new EventEmitter <any>;
  constructor(private dataService:DataService,private router:Router){}
  ngOnChanges(){
    console.log('ngOnChanges....');
    
  }
  ngOnInit(){
    console.log('ngOnInit...');
    
  }
  ngDoCheck(){
    console.log('ngDoCheck....');
    
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit....');
    

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked....');
    
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit....');
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked...');
    
  }
  ngOnDestroy(){
    console.log('ngOnDestroy...');
    
  }





  get(){
    this.data=this.dataService.dataStr;
    console.log(this.data);
  }
  sendData(data:any){
    console.log(data.target.value);
    let value=data.target.value;
    this.dataFromChild.emit(value);
    

  }
  back(){
    this.router.navigateByUrl('/landing');
  }

}
