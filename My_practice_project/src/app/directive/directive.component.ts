import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  show= true;
  toShow1!:string;
  toShow:string='tushar';
  toggle:Boolean=true;
  cars=['fortuner','jaguar','marcedeez','thar','innova'];


  carsDetails=[
    {carName:'swift',prise:900000,color:'white'},
    {carName:'eritga',prise:1400000,color:'gray'},
    {carName:'fortuner',prise:4000000,color:'black'},
    {carName:'creta',prise:1300000,color:'red'},
    {carName:'venue',prise:1000000,color:'blue'},
  ];
  tableHeadings:string[]=['carName','prise','color'];
  data=[10,20,30,40,50,[60,70,80,90]];
  data2:any[]=[];
  data3:any[]=[];
  color='pink';
  styleCss='yellow1';
  multiClass=400;
  switchValue=200;


  constructor(){

  }

  ngOnInit(){
    this.data.forEach((item,i)=>{
      if(i!=5){
        this.data2.push(item)
      }
    })

    this.data.forEach((item:any,i)=>{
      if(i==5){
        this.data3=[...item]
      }
    })
    

  }


  toggleEffect(){
    // this.toggle = false;
    this.toggle=!this.toggle;

  }


}
