import {NgModule} from '@angular/core';
import {BiitRadioButtonComponent} from './biit-radio-button.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from 'biit-ui/icon';
import {BiitTooltipIconModule} from "biit-ui/info";

@NgModule({
  declarations: [
    BiitRadioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitTooltipIconModule
  ],
  exports: [
    BiitRadioButtonComponent
  ]
})
export class BiitRadioButtonModule { }
