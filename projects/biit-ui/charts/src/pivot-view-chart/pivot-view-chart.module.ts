import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotViewChartComponent } from './pivot-view-chart.component';
import {PivotElementModule} from "./components/pivot-element/pivot-element.module";
import {PivotBoardModule} from "./components/pivot-board/pivot-board.module";




@NgModule({
  declarations: [
    PivotViewChartComponent,
  ],
  imports: [
    CommonModule,
    PivotElementModule,
    PivotBoardModule
  ],
  exports: [
    PivotViewChartComponent
  ]
})
export class PivotViewChartModule { }
