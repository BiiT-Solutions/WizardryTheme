import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from 'biit-ui/icon';
import {BiitSliderRangeComponent} from "./biit-slider-range.component";

@NgModule({
  declarations: [
    BiitSliderRangeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule
  ],
  exports: [
    BiitSliderRangeComponent,
  ]
})
export class BiitSliderRangeModule { }
