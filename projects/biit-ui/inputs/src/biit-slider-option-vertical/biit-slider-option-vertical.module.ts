import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from 'biit-ui/icon';
import {BiitSliderOptionVerticalComponent} from "./biit-slider-option-vertical.component";
import {BiitTooltipIconModule} from "biit-ui/info";

@NgModule({
  declarations: [
    BiitSliderOptionVerticalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitTooltipIconModule
  ],
  exports: [
    BiitSliderOptionVerticalComponent,
  ]
})
export class BiitSliderOptionVerticalModule { }
