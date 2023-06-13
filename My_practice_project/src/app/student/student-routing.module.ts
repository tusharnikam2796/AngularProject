import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentModule } from './student.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { StudentDemoComponent } from './student-demo/student-demo.component';

const routes: Routes = [
  {path:'studentActivty',component:StudentActivityComponent},
  {path:'studentDemo',component:StudentDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
