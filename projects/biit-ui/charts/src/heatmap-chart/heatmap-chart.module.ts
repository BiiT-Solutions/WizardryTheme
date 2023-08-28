import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeatmapChartComponent} from "./heatmap-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {BiitIconButtonModule} from 'biit-ui/button';


@NgModule({
  declarations: [HeatmapChartComponent],
  exports: [HeatmapChartComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    BiitIconButtonModule
  ]
})
export class HeatmapChartModule {
}
