import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeatmapChartComponent} from "./heatmap-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";


@NgModule({
  declarations: [HeatmapChartComponent],
  exports: [HeatmapChartComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ]
})
export class HeatmapChartModule {
}
