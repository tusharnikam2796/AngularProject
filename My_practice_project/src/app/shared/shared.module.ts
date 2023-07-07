import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentDemoComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
    StudentDemoComponent,
    FormsModule,
    ReactiveFormsModule,
]
})
export class SharedModule { }
