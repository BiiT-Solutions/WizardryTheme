import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitTooltipComponent } from './biit-tooltip.component';
import {BiitTooltipDirective} from './biit-tooltip.directive';



@NgModule({
  declarations: [
    BiitTooltipComponent,
    BiitTooltipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BiitTooltipComponent,
    BiitTooltipDirective
  ]
})
export class BiitTooltipModule { }
