import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentModule } from './student.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { StudentDemoComponent } from './student-demo/student-demo.component';
import { ApiCallComponent } from './api-call/api-call.component';

const routes: Routes = [
  {path:'studentActivty',component:StudentActivityComponent},
  {path:'studentDemo',component:StudentDemoComponent},
  {path:'apiCall',component:ApiCallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
