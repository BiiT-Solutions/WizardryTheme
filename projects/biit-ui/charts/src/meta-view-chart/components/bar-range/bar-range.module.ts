import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRangeComponent } from './bar-range.component';
import {BarChartModule} from "biit-ui/charts";
import {PipesModule} from "../../pipes/pipes.module";
import {BiitSliderModule} from "biit-ui/inputs";



@NgModule({
  declarations: [
    BarRangeComponent
  ],
  exports: [
    BarRangeComponent
  ],
  imports: [
    CommonModule,
    BarChartModule,
    PipesModule,
    BiitSliderModule
  ]
})
export class BarRangeModule { }
