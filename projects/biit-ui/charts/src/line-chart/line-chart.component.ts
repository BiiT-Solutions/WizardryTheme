import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries, ApexChart,
  ApexDataLabels, ApexGrid, ApexLegend, ApexMarkers, ApexPlotOptions,
  ApexStroke, ApexTitleSubtitle,
  ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent
} from "ng-apexcharts";
import {LineChartData} from './models/line-chart-data';


export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: any;
  colors: any;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  stroke: ApexStroke;
  markers: ApexMarkers;
};


@Component({
  selector: 'biit-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  @ViewChild('apexChart') apexChart: ChartComponent;

  chartOptions: Partial<LineChartOptions>;
  pageNumber = 1;

  @Input() public data: LineChartData;
  @Input() public title = '';
  @Input() public xTitle = '';
  @Input() public yTitle = '';
  @Input() public min: number;
  @Input() public max: number;
  @Input() public plotOptions: ApexPlotOptions;

  constructor() { }

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
    this.chartOptions = {
      series: this.data.series,
      chart: {
        height: '100%',
        width: '100%',
        type: "line",
        toolbar: {
          show: true
        }
      },
      colors: this.data.series.map(c => c.color),
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: this.data.series.length > 1,
        style: {
          fontSize: "16px",
          fontFamily: "Montserrat",
          fontWeight: "500"
        },
        background: {
          opacity: 1,
          borderWidth: 0,
          borderRadius: 0
        }
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: this.title.toUpperCase(),
        align: "left",
        style: {
          fontSize: '20px',
          fontFamily: 'Montserrat',
          fontWeight: 700,
        }
      },
      grid: {
        borderColor: "#262626",
        position: 'back',
        strokeDashArray: 0,
        padding: {
          top: 20
        }
      },
      markers: {
        strokeWidth: 0,
        fillOpacity: 1,
        hover: {
          size: this.data.series.length == 1 ? 7 : 0
        }
      },
      xaxis: {
        categories: this.data.legend,
        title: {
          text: this.xTitle,
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
            fontWeight: 900,
            color: "#262626"
          }
        },
        crosshairs : {
          width: 'tickWidth',
          position: 'back',
          stroke: {
            color: '#EDEDED',
            dashArray: 0,
          },
          opacity: 0.2
        },
        tooltip: {
          enabled: false
        },
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat'
          },
          trim: true
        }
      },
      yaxis: {
        title: {
          text: this.yTitle,
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
            fontWeight: 900,
            color: "#262626"
          }
        },
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat'
          }
        },
        min: this.min,
        max: this.max
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        floating: false,
        offsetY: -5,
        fontSize: '16px',
        fontFamily: 'Montserrat'
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          // debugger;
          let tooltip =
            '<div class="tooltip-base">' +
            '  <div class="tooltip-header">' +
            w.globals.categoryLabels[dataPointIndex] +
            '  </div>' +
            '  <div class="tooltip-content">';
          series.forEach((seriesItem, i) => {
            tooltip +=
              '<div class="tooltip-metadata">' +
              '  <div class="tooltip-square" style="background:'+ w.globals.colors[i] +'"></div>' +
              '  <a>' + w.globals.seriesNames[i] + ': </a>' +
              '  <a style="margin-left: 0.35rem; font-weight: 500">' + series[i][dataPointIndex] + '</a>' +
              '</div>';
          });

          tooltip +=
            '  </div>' +
            '</div>';
          return tooltip;
        }
      },
    };
  }

  public async getPngBlob(): Promise<Blob> {
    const base64 = await this.apexChart.dataURI();
    const decode = await fetch(base64.imgURI);
    return decode.blob();
  }
}
