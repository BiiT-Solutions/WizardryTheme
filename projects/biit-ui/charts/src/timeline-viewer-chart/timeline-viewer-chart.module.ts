import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {TimelineViewerChartComponent} from "./timeline-viewer-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";


@NgModule({
  declarations: [TimelineViewerChartComponent],
  exports: [TimelineViewerChartComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  providers: [DatePipe]
})
export class TimelineViewerChartModule {
}
