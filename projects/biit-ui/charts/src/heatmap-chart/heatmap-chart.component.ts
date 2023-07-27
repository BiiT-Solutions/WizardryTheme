import {Component, Input, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions, ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from "ng-apexcharts";
import {HeatmapChartData, HeatmapChartDataElement, HeatmapData} from "./heatmap-chart-data";
import {Colors} from "../colors";
import {CustomChartComponent} from "../custom-chart-component";
import {ApexTheme} from "ng-apexcharts/lib/model/apex-types";


type HeatmapChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: ApexDataLabels;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

type UpdateBarsChartOptions = {
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-heatmap-chart',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.scss']
})
export class HeatmapChartComponent extends CustomChartComponent {

  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions: HeatmapChartOptions;

  @Input()
  public data: HeatmapChartData;
  @Input()
  public width: number = 500;
  @Input()
  public showToolbar: boolean = true;
  @Input()
  public colors: string[] = Colors.defaultPalette;
  @Input()
  public horizontal: boolean = false;
  @Input()
  public barThicknessPercentage: number = 75;
  @Input()
  public showValuesLabels: boolean = true;
  @Input()
  public xAxisOnTop: boolean = false;
  @Input()
  public xAxisTitle: string | undefined = undefined;
  @Input()
  public yAxisTitle: string | undefined = undefined;
  @Input()
  public showYAxis: boolean = true;
  @Input()
  public title: string | undefined = undefined;
  @Input()
  public titleAlignment: "left" | "center" | "right" = "center";
  @Input()
  public fill: "gradient" | "solid" | "pattern" | "image" = "solid";
  @Input()
  public borderRadius: number = 0;
  @Input()
  public enableTotals: boolean = true;
  @Input()
  public legendPosition: 'left' | 'bottom' | 'right' | 'top' = "bottom"
  @Input()
  public shadow: boolean = true;
  @Input()
  public stackType: '100%' | 'normal' = "normal";
  @Input()
  public strokeWidth: number = 5;
  @Input()
  public curve: "straight" | "smooth" | "stepline" = "smooth";

  constructor() {
    super();
    this.data = HeatmapChartData.fromMultipleDataElements([
      new HeatmapChartDataElement([["Value1", 80], ["Value2", 98], ["Value3", 8], ["Value4", 49], ["Value5", 20]], "Group1"),
      new HeatmapChartDataElement([["Value1", 91], ["Value2", 39], ["Value3", 42], ["Value4", 92], ["Value5", 77]], "Group2"),
      new HeatmapChartDataElement([["Value1", 62], ["Value2", 3], ["Value3", 20], ["Value4", 45], ["Value5", 85]], "Group3")]);
  }

  protected setProperties(): void {
    this.chartOptions = {
      series: this.data.getData(),
      chart: this.getChart('heatmap', this.width, this.shadow, this.showToolbar),
      labels: this.getLabels(this.showValuesLabels),
      fill: this.getFill(this.fill),
      colors: this.colors,
      stroke: this.getStroke(this.strokeWidth, this.curve),
      title: this.getTitle(this.title, this.titleAlignment),
      xaxis: this.getXAxis(this.data.getLabels(), this.xAxisOnTop ? 'top' : 'bottom', this.xAxisTitle),
      plotOptions: this.getPlotOptions()
    };
  }

  protected getPlotOptions(): ApexPlotOptions {
    return {
      heatmap: {
        radius: 30,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 50,
              color: "#008FFB"
            },
            {
              from: 51,
              to: 100,
              color: "#00E396"
            }
          ]
        }
      }
    }
  }

  update(data: HeatmapChartData) {
    this.chart.updateOptions(data.getData());
  }
}
