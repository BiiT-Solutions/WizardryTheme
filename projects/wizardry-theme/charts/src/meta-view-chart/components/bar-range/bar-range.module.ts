import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRangeComponent } from './bar-range.component';
import {PipesModule} from "../../pipes/pipes.module";
import {BiitSliderModule, BiitSliderRangeModule} from "@biit-solutions/wizardry-theme/inputs";
import {FormsModule} from "@angular/forms";
import {BarChartModule} from "../../../bar-chart/bar-chart.module";



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
    BiitSliderModule,
    FormsModule,
    BiitSliderRangeModule
  ]
})
export class BarRangeModule { }
