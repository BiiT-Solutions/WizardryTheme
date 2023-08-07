import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";
import {StackedBarsData} from "../stacked-bars-chart/stacked-bars-chart-data";
import {RadarChartData, RadarChartDataElement} from "./radar-chart-data";
import {Colors} from "../colors";
import {CustomChartComponent} from "../custom-chart-component";
import {ApexTheme} from "ng-apexcharts/lib/model/apex-types";

type RadarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: ApexDataLabels;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  markers: ApexMarkers;
  stroke: ApexStroke;
  theme: ApexTheme;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent extends CustomChartComponent {

  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions: RadarChartOptions;

  @Input()
  public data: RadarChartData;
  @Input()
  public width: number|string = '100%';
  @Input()
  public height: number|string = 'auto';
  @Input()
  public radarSize: number = 140;
  @Input()
  public showToolbar: boolean = true;
  @Input()
  public colors: string[] = Colors.defaultPalette;
  @Input()
  public showValuesLabels: boolean = false;
  @Input()
  public title: string | undefined = undefined;
  @Input()
  public titleAlignment: "left" | "center" | "right" = "center";
  @Input()
  public fill: "gradient" | "solid" | "pattern" | "image" = "solid";
  @Input()
  public shadow: boolean = true;
  @Input()
  public opacity: number = 0.4;
  @Input()
  public strokeWidth: number = 5;
  @Input()
  public innerColors: string[] = ["#ffffff"]
  @Input()
  public legendPosition: 'left' | 'bottom' | 'right' | 'top' = "bottom"

  constructor() {
    super();
    this.data = RadarChartData.fromMultipleDataElements([
      new RadarChartDataElement([["Value1", 5], ["Value2", 4], ["Value3", 1]], "Group1"),
      new RadarChartDataElement([["Value1", 1], ["Value2", 2], ["Value3", 3]], "Group2"),
      new RadarChartDataElement([["Value1", 4], ["Value2", 3], ["Value3", 3]], "Group3"),
      new RadarChartDataElement([["Value1", 1], ["Value2", 2], ["Value3", 3]], "Group4"),
      new RadarChartDataElement([["Value1", 6], ["Value2", 2], ["Value3", 3]], "Group5")]);
  }

  protected setProperties(): void {
    this.chartOptions = {
      chart: this.getChart('radar', this.shadow, this.showToolbar, this.width, this.height),
      series: this.setColors(this.data.getData()),
      labels: this.getLabels(this.showValuesLabels),
      fill: this.getFill(this.fill, this.opacity),
      markers: this.getMarkers(),
      stroke: this.getStroke(this.strokeWidth),
      plotOptions: this.getPlotOptions(),
      tooltip: this.getTooltip(),
      xaxis: this.getXAxis(this.data.getLabels()),
      title: this.getTitle(this.title, this.titleAlignment),
      legend: this.getLegend(this.legendPosition),
      theme: this.getTheme()
    };
  }

  protected getPlotOptions(): ApexPlotOptions {
    return {
      radar: {
        size: this.radarSize,
        polygons: {
          fill: {
            colors: this.innerColors
          }
        }
      }
    }
  }

  update(data: RadarChartData) {
    this.chart.updateSeries(data.getData());
  }

  setColors(data: StackedBarsData[]): StackedBarsData[] {
    for (let i = 0; i < data.length; i++) {
      data[i].color = this.colors[i % this.colors.length];
    }
    return data;
  }
}
