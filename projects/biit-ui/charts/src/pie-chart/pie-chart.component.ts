import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import {
  ApexChart,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTitleSubtitle,
  ChartComponent
} from "ng-apexcharts";
import {PieChartData} from "./pie-chart-data";
import {Colors} from "../colors";


type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  colors: string [];
  chart: ApexChart;
  fill: ApexFill;
  responsive: ApexResponsive[];
  labels: string[];
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @ViewChild('chart')
  private chart!: ChartComponent;

  public pieChartOptions!: PieChartOptions;

  @Input()
  public pieChartData: PieChartData;
  @Input()
  public width: number = 500;
  @Input()
  public showToolbar: boolean = true;
  @Input()
  public colors: string[] = Colors.defaultPalette;
  @Input()
  public title: string | undefined = undefined;
  @Input()
  public titleAlignment: "left" | "center" | "right" = "center";
  @Input()
  public isDonut: boolean = false;
  @Input()
  public fill: "gradient" | "solid" | "pattern" | "image" = "solid";
  @Input()
  public shadow: boolean = true;
  @Input()
  public legendPosition: 'left' | 'bottom' | 'right' | 'top' = "bottom"

  constructor() {
    this.pieChartData = PieChartData.fromArray([["Value1", 5], ["Value2", 4], ["Value3", 1]]);
  }

  ngOnInit() {
    this.setProperties();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setProperties();
  }

  private setProperties(): void {
    this.pieChartOptions = {
      colors: this.colors,
      chart: {
        width: this.width,
        type: this.isDonut ? "donut" : "pie",
        dropShadow: {
          enabled: this.shadow,
          color: '#000',
          top: -5,
          left: 7,
          blur: 8,
          opacity: 0.2
        },
        toolbar: {
          show: this.showToolbar,
        },
      },
      series: this.pieChartData.getValues(),
      labels: this.pieChartData.getLabels(),
      fill: {
        type: this.fill,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: this.legendPosition
            }
          }
        }
      ],
      title: {
        text: this.title,
        align: this.titleAlignment
      },
      legend: {
        position: this.legendPosition
      },
    };
  }

  update(data: PieChartData) {
    this.chart.updateSeries(data.getData());
  }
}
