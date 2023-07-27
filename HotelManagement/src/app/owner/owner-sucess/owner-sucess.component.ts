import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-sucess',
  templateUrl: './owner-sucess.component.html',
  styleUrls: ['./owner-sucess.component.scss']
})
export class OwnerSucessComponent {


  constructor(private router:Router){}

  hotelRgistration(){
      this.router.navigateByUrl('/owner/ownerHotelRagistration');
  }

}
