import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule,
    MatAutocompleteModule,
    ToastrModule.forRoot(),
    MatTableModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTableModule
  ]
})
export class SharedModule { }
