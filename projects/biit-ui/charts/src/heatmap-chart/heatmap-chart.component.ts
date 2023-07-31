import {Component, Input, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";
import {HeatmapChartData, HeatmapChartDataElement} from "./heatmap-chart-data";
import {Colors} from "../colors";
import {CustomChartComponent} from "../custom-chart-component";
import {HeatmapChartRange} from "./heatmap-chart-range";


type HeatmapChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  title: ApexTitleSubtitle;
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
  //public ranges: [{ from: number, to: number, color: string }] | undefined;
  public ranges: HeatmapChartRange[] | undefined;
  @Input()
  public width: number = 500;
  @Input()
  public showToolbar: boolean = true;
  @Input()
  public colors: string[] = Colors.defaultPalette;
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
  public radius: number = 30;
  @Input()
  public legendPosition: 'left' | 'bottom' | 'right' | 'top' = "bottom"
  @Input()
  public shadow: boolean = true;
  @Input()
  public singleColor: boolean = false;
  @Input()
  public enableColorFading: boolean = true;
  @Input()
  public distributed: boolean = true;

  constructor() {
    super();
    this.data = HeatmapChartData.fromMultipleDataElements([
      new HeatmapChartDataElement([["Value1", 80], ["Value2", 98], ["Value3", 8], ["Value4", 49], ["Value5", 20]], "Group1"),
      new HeatmapChartDataElement([["Value1", 91], ["Value2", 39], ["Value3", 42], ["Value4", 92], ["Value5", 77]], "Group2"),
      new HeatmapChartDataElement([["Value1", 62], ["Value2", 3], ["Value3", 20], ["Value4", 45], ["Value5", 85]], "Group3")]);
  }

  protected setProperties(): void {
    console.log(this.data.getData());
    this.chartOptions = {
      series: this.data.getData(),
      chart: this.getChart('heatmap', this.width, this.shadow, this.showToolbar),
      colors: this.singleColor ? [this.colors[0]] : this.colors,
      title: this.getTitle(this.title, this.titleAlignment),
      plotOptions: this.getPlotOptions(),
    };
  }

  protected getPlotOptions(): ApexPlotOptions {
    return {
      heatmap: {
        radius: this.radius,
        enableShades: this.enableColorFading,
        distributed: this.distributed,
        colorScale: {
          ranges: this.ranges && !this.singleColor ? this.ranges : []
        }
      }
    }
  }

  update(data: HeatmapChartData): void {
    this.chart.updateOptions(data.getData());
  }
}
