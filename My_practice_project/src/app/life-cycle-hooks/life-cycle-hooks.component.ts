import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent {
  constructor(private router:Router){
    console.log("constructor...");//it is not life cycle hook but wiil get trigger first when component get load
    
  }
  ngOnChange(){
    console.log('ngOnChange...');
    
  }
  ngOnInit(){
    console.log("ngOnInit...");
    
  }
  ngDoCheck(){
    console.log('ngDoCheck..');
    
  }

}
