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
  ]

  toggleEffect(){
    // this.toggle = false;
    this.toggle=!this.toggle;

  }


}
