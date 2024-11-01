import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from 'biit-ui/icon';
import {BiitSliderOptionComponent} from "./biit-slider-option.component";
import {BiitTooltipIconModule} from "biit-ui/info";

@NgModule({
  declarations: [
    BiitSliderOptionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitTooltipIconModule
  ],
  exports: [
    BiitSliderOptionComponent,
  ]
})
export class BiitSliderOptionModule { }
