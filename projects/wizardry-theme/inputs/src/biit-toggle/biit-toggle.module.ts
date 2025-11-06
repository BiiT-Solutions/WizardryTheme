import {NgModule} from '@angular/core';
import {BiitToggleComponent} from './biit-toggle.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BiitToggleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BiitToggleComponent
  ]
})
export class BiitToggleModule { }
