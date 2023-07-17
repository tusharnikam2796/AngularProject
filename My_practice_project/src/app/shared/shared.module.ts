import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumbersOnlyDirective } from '../student/numbers-only.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    StudentDemoComponent,
    NumbersOnlyDirective,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
    
  ],
  exports:[
    StudentDemoComponent,
    FormsModule,
    ReactiveFormsModule,
    NumbersOnlyDirective,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
    
]
})
export class SharedModule { }
