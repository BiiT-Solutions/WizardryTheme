import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ApexChart, ApexFill, ApexLegend, ApexPlotOptions, ApexTitleSubtitle, ChartComponent} from "ng-apexcharts";
import {RadialChartData} from "../radial-chart/radial-chart-data";
import {BarChartData} from "../bar-chart/bar-chart-data";
import {GaugeChartData} from "./gauge-chart-data";

type GaugeChartOptions = {
  series: number[];
  colors: string [];
  labels: string[];
  fill: ApexFill;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  @ViewChild('chart')
  chart!: ChartComponent;

  public gaugeChartOptions!: GaugeChartOptions;

  @Input()
  public gaugeChartData: GaugeChartData;
  @Input()
  public width: number = 500;
  @Input()
  public height: number = 200;
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
  public title: string | undefined = undefined;
  @Input()
  public titleAlignment: "left" | "center" | "right" = "center";
  @Input()
  public fill: "gradient" | "solid" | "pattern" | "image" = "solid";
  @Input()
  public legendPosition: 'left' | 'bottom' | 'right' | 'top' = "bottom"
  @Input()
  public shadow: boolean = true;
  @Input()
  public innerCirclePercentage: number = 50;
  @Input()
  public trackBackgroundColor: string = "#e7e7e7";
  @Input()
  public trackBackgroundThicknessPercentage: number = 97;

  constructor() {
    this.gaugeChartData = GaugeChartData.fromArray([["Value1", 85]]);
  }

  ngOnInit() {
    this.setProperties();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setProperties();
  }

  private setProperties(): void {
    this.gaugeChartOptions = {
      colors: this.colors,
      chart: {
        width: this.width,
        type: "radialBar",
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
      series: this.gaugeChartData.getValues(),
      labels: this.gaugeChartData.getLabels(),
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      plotOptions: {
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
