import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRangeComponent } from './bar-range.component';
import {BarChartModule} from "biit-ui/charts";
import {PipesModule} from "../../pipes/pipes.module";
import {BiitSliderModule, BiitSliderRangeModule} from "biit-ui/inputs";
import {FormsModule} from "@angular/forms";



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
