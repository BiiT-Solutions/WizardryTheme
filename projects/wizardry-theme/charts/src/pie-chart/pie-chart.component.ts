import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {
  ApexChart,
  ApexDataLabels, ApexGrid, ApexLegend,
  ApexPlotOptions, ApexStates, ApexTitleSubtitle,
  ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent
} from "ng-apexcharts";
import {PieChartData} from './models/pie-chart-data';

export type PieChartOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  dataLabels: ApexDataLabels;
  fill: any;
  colors: any;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  states: ApexStates;
};

@Component({
  selector: 'biit-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {
  @ViewChild('apexChart') apexChart: ChartComponent;

  chartOptions: Partial<PieChartOptions>;
  pageNumber = 1;

  @Input() public data: PieChartData;
  @Input() public title = '';
  @Input() public width: number;
  @Input() public min: number;
  @Input() public max: number;
  yLegendMargin: number = 0;

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    if (!this.data?.data?.length) {
      return;
    }
    this.createChartOptions();
  }

  ngOnChanges() {
    if (!this.data?.data?.length) {
      return;
    }
    this.createChartOptions();
  }

  private createChartOptions() {
    // @ts-ignore
    this.chartOptions = {
      series: this.data.data,
      chart: {
        height: '100%',
        width: '100%',
        type: "pie"
      },
      labels: this.data.legend,
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "20px",
          fontFamily: "Montserrat",
          fontWeight: "700"
        },
        dropShadow: {
          enabled: false
        }
      },
      xaxis: {
        categories: this.data.legend,
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
            colors: ["262626"]
          },
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
            colors: ["262626"]
          },
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        fontSize: '16px',
        fontFamily: 'Montserrat',

      },
      title: {
        text: this.title.toUpperCase(),
        style: {
          fontSize: '20px',
          fontFamily: 'Montserrat',
          fontWeight: 700,
        }
      },
      grid: {
        borderColor: 'var(--chart-component-color)',
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          let tooltip =
            '<div class="tooltip-base">' +
            '  <div class="tooltip-content">' +
            '    <div class="tooltip-metadata">' +
            '      <div class="tooltip-square" style="background:'+ w.globals.colors[seriesIndex] +'"></div>' +
            '      <a>' + w.globals.seriesNames[seriesIndex] + ': </a>' +
            '      <a style="margin-left: 0.35rem; font-weight: 500">' + series[seriesIndex] + '</a>' +
            '    </div>';

          tooltip +=
            '  </div>' +
            '</div>';
          return tooltip;
        }
      },
      colors: ['#FF005B', '#5E92DE', '#753A86', '#F0A700', '#00AF77'],
      states: {
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  }

  public async getPngBlob(): Promise<Blob> {
    const base64 = await this.apexChart.dataURI();
    const decode = await fetch(base64.imgURI);
    return decode.blob();
  }
}
