import {NgModule} from '@angular/core';
import {BiitCheckboxComponent} from './biit-checkbox.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BiitCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BiitCheckboxComponent
  ]
})
export class BiitCheckboxModule { }
