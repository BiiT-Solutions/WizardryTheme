import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from "ng-apexcharts";
import {BarChartData} from "./bar-chart-data";


type BarChartOptions = {
  series: ApexAxisChartSeries;
  colors: string [];
  fill: ApexFill;
  chart: ApexChart;
  labels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {

  @ViewChild('chart')
  chart!: ChartComponent;

  barChartOptions!: BarChartOptions;

  @Input()
  public barChartData: BarChartData;
  @Input()
  public width: number = 500;
  @Input()
  public showToolbar: boolean = true;
  @Input()
  public colors: string[] = [
    "#fd7f6f",
    "#7eb0d5",
    "#b2e061",
    "#bd7ebe",
    "#ffb55a",
    "#ffee65",
    "#beb9db",
    "#fdcce5",
    "#8bd3c7"
  ];
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
  public legendPosition: 'left' | 'bottom' | 'right' | 'top' = "bottom"
  @Input()
  public shadow: boolean = true;

  constructor() {
    this.barChartData = BarChartData.fromArray([["Value1", 5], ["Value2", 4], ["Value3", 1]]);
  }


  ngOnInit() {
    this.setProperties();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setProperties();
  }

  private setProperties(): void {
    this.barChartOptions = {
      colors: this.colors,
      chart: {
        width: this.width,
        type: "bar",
        toolbar: {
          show: this.showToolbar,
        },
        dropShadow: {
          enabled: this.shadow,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
      },
      series: this.barChartData.getData(),
      labels: {
        enabled: this.showValuesLabels
      },
      fill: {
        type: this.fill,
      },
      plotOptions: {
        bar: {
          distributed: true, // this line is mandatory for using colors
          horizontal: this.horizontal,
          barHeight: this.barThicknessPercentage + '%',
          columnWidth: this.barThicknessPercentage + '%',
          borderRadius: this.borderRadius
        }
      },
      xaxis: {
        categories: this.barChartData.getLabels(),
        position: this.xAxisOnTop ? 'top' : 'bottom',
        title: {
          text: this.xAxisTitle
        }
      },
      yaxis: {
        show: this.showYAxis,
        title: {
          text: this.yAxisTitle
        },
      },
      title: {
        text: this.title,
        align: this.titleAlignment
      },
      legend: {
        position: this.legendPosition
      },
    };
  }
}
