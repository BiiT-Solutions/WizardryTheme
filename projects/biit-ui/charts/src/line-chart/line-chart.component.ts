import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from "ng-apexcharts";
import {LineChartData, LineChartDataElement} from "./line-chart-data";


type LineChartOptions = {
  series: ApexAxisChartSeries;
  colors: string [];
  chart: ApexChart;
  labels: ApexDataLabels;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @ViewChild('chart')
  chart!: ChartComponent;

  public lineChartOptions!: LineChartOptions;

  @Input()
  public lineChartData: LineChartData;
  @Input()
  public height: number = 250;
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
  public curve: "straight" | "smooth" | "stepline" = "smooth";
  @Input()
  public shadow: boolean = true;
  @Input()
  public strokeWidth: number = 5;

  constructor() {
    this.lineChartData = LineChartData.fromMultipleDataElements([
      new LineChartDataElement([["Value1", 5], ["Value2", 4], ["Value3", 1]], "Line1"),
      new LineChartDataElement([["Value1", 2], ["Value2", 3], ["Value3", 5]], "Line2")]);
  }


  ngOnInit() {
    this.setProperties();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setProperties();
  }

  private setProperties(): void {
    this.lineChartOptions = {
      colors: this.colors,
      series: this.lineChartData.getData(),
      chart: {
        height: this.height,
        width: this.width,
        type: "line",
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
        }
      },
      xaxis: {
        categories: this.lineChartData.getLabels(),
        position: this.xAxisOnTop ? 'top' : 'bottom',
        title: {
          text: this.xAxisTitle
        }
        //type: 'datetime'
      },
      yaxis: {
        show: this.showYAxis,
        title: {
          text: this.yAxisTitle
        },
      },
      stroke: {
        curve: this.curve,
        width: this.strokeWidth,
      },
      title: {
        text: this.title,
        align: this.titleAlignment
      },
      markers: {
        size: 0
      },
    };
  }
}
