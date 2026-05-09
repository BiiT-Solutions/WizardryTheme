import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';
import {BiitSliderOptionComponent} from "./biit-slider-option.component";
import {BiitTooltipIconModule} from "@biit-solutions/wizardry-theme/info";

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
