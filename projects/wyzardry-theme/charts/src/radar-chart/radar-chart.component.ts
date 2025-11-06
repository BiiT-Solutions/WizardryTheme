import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {
  ApexChart, ApexDataLabels, ApexLegend, ApexMarkers,
  ApexPlotOptions, ApexStates, ApexStroke, ApexTitleSubtitle,
  ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent
} from "ng-apexcharts";
import {RadarChartData, RadarChartSeries} from './models/radar-chart-data';


export type RadarChartOptions = {
  series: RadarChartSeries[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: any;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  states: ApexStates;
  markers: ApexMarkers;
  stroke: ApexStroke;
};


@Component({
  selector: 'biit-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit, OnChanges {
  @ViewChild('apexChart') apexChart: ChartComponent;

  chartOptions: Partial<RadarChartOptions>;
  pageNumber = 1;

  @Input() public data: RadarChartData;
  @Input() public title = '';
  @Input() public width: number;
  @Input() public min: number;
  @Input() public max: number;
  yLegendMargin: number = 0;

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    if (!this.data?.series?.length) {
      return;
    }
    this.createChartOptions();
  }

  ngOnChanges() {
    if (!this.data?.series?.length) {
      return;
    }
    this.createChartOptions();
  }

  private createChartOptions() {
    // @ts-ignore
    this.chartOptions = {
      series: this.data.series,
      chart: {
        height: '100%',
        width: '100%',
        type: "radar"
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 10,
        shape: "rect",
        colors: ["transparent"],
        radius: 0,
        strokeWidth: 0,

      },
      xaxis: {
        categories: this.data.legend,
        labels: {
          style: {
            fontSize: '16px',
            fontFamily: 'Montserrat',
            colors: this.data.legend.map(v => "#000000")
          },
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '0',
          },
        },
        min: this.min,
        max: this.max
      },
      fill: {
        opacity: 0.5
      },
      stroke: {
        width: 4
      },
      legend: {
        fontSize: '16px',
        fontFamily: 'Montserrat',
        position: 'right',
        offsetY: 30
      },
      title: {
        text: this.title.toUpperCase(),
        style: {
          fontSize: '20px',
          fontFamily: 'Montserrat',
          fontWeight: 700,
        }
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          let tooltip =
            '<div class="tooltip-base">' +
            '  <div class="tooltip-header">' +
            w.globals.labels[dataPointIndex] +
            '  </div>' +
            '  <div class="tooltip-content">' +
            '    <div class="tooltip-metadata">' +
            '      <div class="tooltip-square" style="background:'+ w.globals.colors[seriesIndex] +'"></div>' +
            '      <a>' + w.globals.seriesNames[seriesIndex] + ': </a>' +
            '      <a style="margin-left: 0.35rem; font-weight: 500">' + series[seriesIndex][dataPointIndex] + '</a>' +
            '    </div>' +
            '  </div>' +
            '</div>';
          return tooltip;
        }
      },
      states: {
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: "#e9e9e9"
          },
        },
      }
    };
  }

  public async getPngBlob(): Promise<Blob> {
    const base64 = await this.apexChart.dataURI();
    const decode = await fetch(base64.imgURI);
    return decode.blob();
  }
}
