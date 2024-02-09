import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitTooltipIconComponent} from "./biit-tooltip-icon.component";
import {BiitTooltipModule} from "../biit-tooltip/biit-tooltip.module";

@NgModule({
  declarations: [
    BiitTooltipIconComponent
  ],
  imports: [
    CommonModule,
    BiitTooltipModule
  ],
  exports: [
    BiitTooltipIconComponent
  ]
})
export class BiitTooltipIconModule { }
