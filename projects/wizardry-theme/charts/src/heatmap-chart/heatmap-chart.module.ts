import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeatmapChartComponent} from "./heatmap-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {BiitIconButtonModule} from '@biit-solutions/wizardry-theme/button';


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
