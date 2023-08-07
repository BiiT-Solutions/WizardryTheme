import {Component, Input, ViewChild} from '@angular/core';
import {ApexChart, ApexFill, ApexPlotOptions, ApexTitleSubtitle, ChartComponent, ApexTooltip} from "ng-apexcharts";
import {GaugeChartData} from "./gauge-chart-data";
import {Colors} from "../colors";
import {CustomChartComponent} from "../custom-chart-component";
import {ApexTheme} from "ng-apexcharts/lib/model/apex-types";

type GaugeChartOptions = {
  series: number[];
  colors: string [];
  labels: string[];
  fill: ApexFill;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  theme: ApexTheme;
};

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent extends CustomChartComponent {

  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions: GaugeChartOptions;

  @Input()
  public data: GaugeChartData;
  @Input()
  public width: number|string = '100%';
  @Input()
  public height: number|string = 'auto';
  @Input()
  public showToolbar: boolean = true;
  @Input()
  public colors: string[] = Colors.defaultPalette;
  @Input()
  public title: string | undefined = undefined;
  @Input()
  public titleAlignment: "left" | "center" | "right" = "center";
  @Input()
  public fill: "gradient" | "solid" | "pattern" | "image" = "gradient";
  @Input()
  public opacity: number = 1;
  @Input()
  public shadow: boolean = true;
  @Input()
  public innerCirclePercentage: number = 50;
  @Input()
  public trackBackgroundColor: string = "#e7e7e7";
  @Input()
  public trackBackgroundThicknessPercentage: number = 97;

  constructor() {
    super();
    this.data = GaugeChartData.fromArray([["Value1", 85], ["Value2", 49]]);
  }

  protected setProperties(): void {
    this.chartOptions = {
      colors: this.colors,
      chart: this.getChart('radialBar', this.shadow, this.showToolbar, this.width, this.height),
      series: this.data?.getValues(),
      labels: this.data?.getLabels(),
      fill: this.getFill(this.fill, this.opacity),
      plotOptions: this.getPlotOptions(),
      tooltip: this.getTooltip(),
      title: this.getTitle(this.title, this.titleAlignment),
      theme:this.getTheme()
    };
  }

  protected getPlotOptions(): ApexPlotOptions {
    return {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: this.trackBackgroundColor,
          strokeWidth: this.trackBackgroundThicknessPercentage + "%",
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            opacity: 0.31,
            blur: 2
          }
        },
        offsetY: -20,
        dataLabels: {
          name: {
            show: true,
            offsetY: -15,
            fontSize: "16px"
          },
          value: {
            show: true,
            offsetY: -15,
            fontSize: "12px"
          }
        },
        hollow: {
          size: this.innerCirclePercentage + "%"
        }
      }
    }
  }

  update(data: GaugeChartData) {
    this.chart.updateSeries(data.getData());
  }
}
