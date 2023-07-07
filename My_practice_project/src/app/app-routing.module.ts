import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectiveComponent } from './directive/directive.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '',component:LandingComponent},
  {path: 'landing',component:LandingComponent},
  {path:'login', component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'student',loadChildren:()=>import('./student/student.module').then(mod=>mod.StudentModule)},
  {path:'directives',component:DirectiveComponent},
  {path:'lifeCycleHooks',component:LifeCycleHooksComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'form',component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
