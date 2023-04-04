import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
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
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";
import {StackedBarsData} from "../stacked-bars-chart/stacked-bars-chart-data";
import {RadarChartData, RadarChartDataElement} from "./radar-chart-data";
import {Colors} from "../colors";

type RadarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: ApexDataLabels;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  markers: ApexMarkers;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  @ViewChild('chart')
  chart!: ChartComponent;

  public radarChartOptions!: RadarChartOptions;

  @Input()
  public radarChartData: RadarChartData;
  @Input()
  public width: number = 600;
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
    this.radarChartData = RadarChartData.fromMultipleDataElements([
      new RadarChartDataElement([["Value1", 5], ["Value2", 4], ["Value3", 1]], "Group1"),
      new RadarChartDataElement([["Value1", 1], ["Value2", 2], ["Value3", 3]], "Group2"),
      new RadarChartDataElement([["Value1", 4], ["Value2", 3], ["Value3", 3]], "Group3"),
      new RadarChartDataElement([["Value1", 1], ["Value2", 2], ["Value3", 3]], "Group4"),
      new RadarChartDataElement([["Value1", 6], ["Value2", 2], ["Value3", 3]], "Group5")]);
  }

  ngOnInit() {
    this.setProperties();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setProperties();
  }

  private setProperties(): void {
    this.radarChartOptions = {
      chart: {
        width: this.width,
        type: "radar",
        toolbar: {
          show: this.showToolbar,
        },
        dropShadow: {
          enabled: this.shadow,
          color: '#000',
          blur: 1,
          left: 1,
          top: 1
        },
      },
      series: this.setColors(this.radarChartData.getData()),
      labels: {
        enabled: this.showValuesLabels
      },
      fill: {
        type: this.fill,
        opacity: this.opacity,
      },
      markers: {
        size: 0
      },
      stroke: {
        width: this.strokeWidth
      },
      plotOptions: {
        radar: {
          size: this.radarSize,
          polygons: {
            fill: {
              colors: this.innerColors
            }
          }
        }
      },
      xaxis: {
        categories: this.radarChartData.getLabels()
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
