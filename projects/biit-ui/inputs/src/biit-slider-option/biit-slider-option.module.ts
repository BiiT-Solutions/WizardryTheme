import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from 'biit-ui/icon';
import {BiitSliderOptionComponent} from "./biit-slider-option.component";

@NgModule({
  declarations: [
    BiitSliderOptionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule
  ],
  exports: [
    BiitSliderOptionComponent,
  ]
})
export class BiitSliderOptionModule { }
