import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitTernaryToggleComponent } from './biit-ternary-toggle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BiitTernaryToggleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BiitTernaryToggleComponent
  ]
})
export class BiitTernaryToggleModule { }
