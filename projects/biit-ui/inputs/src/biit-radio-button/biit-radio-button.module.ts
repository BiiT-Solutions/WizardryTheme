import {NgModule} from '@angular/core';
import {BiitRadioButtonComponent} from './biit-radio-button.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from 'biit-ui/icon';

@NgModule({
  declarations: [
    BiitRadioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule
  ],
  exports: [
    BiitRadioButtonComponent
  ]
})
export class BiitRadioButtonModule { }
