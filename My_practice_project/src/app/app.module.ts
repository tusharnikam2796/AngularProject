import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectiveComponent } from './directive/directive.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { CharOnlyDirective } from './char-only.directive';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    DirectiveComponent,
    LifeCycleHooksComponent,
    ParentComponent,
    ChildComponent,
    FormComponent,
    CharOnlyDirective,
    FilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    //ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
