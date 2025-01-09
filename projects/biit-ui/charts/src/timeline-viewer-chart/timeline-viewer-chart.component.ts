import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels,
  ApexGrid, ApexLegend, ApexMarkers,
  ApexStroke, ApexTitleSubtitle, ApexTooltip,
  ApexXAxis, ApexYAxis
} from "ng-apexcharts";
import {TimelineViewerChartData} from './models/timeline-viewer-chart-data';
import {subMonths} from "date-fns";
import {TimelineViewerChartOptions} from "./models/timeline-viewer-chart-options";
import {DatePipe} from "@angular/common";

type ChartOptions = {
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
  plotOptions: any;
};

@Component({
  selector: 'biit-timeline-viewer-chart',
  templateUrl: './timeline-viewer-chart.component.html',
  styleUrls: ['./timeline-viewer-chart.component.scss']
})
export class TimelineViewerChartComponent implements OnInit, OnChanges {

  @Input() data: Object[] = [];
  @Input() options: TimelineViewerChartOptions;
  @Output() onItemClick: EventEmitter<TimelineViewerChartData> = new EventEmitter<TimelineViewerChartData>();

  scatterChartOptions: Partial<ChartOptions>;
  areaChartOptions: Partial<ChartOptions>;
  pageNumber = 1;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    if (!this.data?.length || !this.options) {
      return;
    }
    this.createChartOptions();
  }

  ngOnChanges() {
    if (!this.data?.length || !this.options) {
      return;
    }
    this.createChartOptions();
  }

  private createChartOptions() {
    const series = TimelineViewerChartData.generate(this.data, this.options);
    const timeValues = series.sort((a, b) => a.x - b.x);
    const max = timeValues[timeValues.length-1].x;
    const min = subMonths(timeValues[timeValues.length-1].x, 1).getTime();

    this.areaChartOptions = {
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1,
        type: "solid"
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            fontSize: '16px',
            fontFamily: 'Montserrat',
            colors: ["262626"]
          }
        },
      },
      stroke: {
        width: 0,
        curve: "smooth"
      },


      series: [
        {
          name: 'series',
          data: series ?? []
        }
      ],
      chart: {
        id: "chartyear",
        type: "bar",
        height: 160,
        background: "white",
        stacked: true,
        toolbar: {
          autoSelected: "selection"
        },
        brush: {
          enabled: true,
          target: "scatterchart"
        },
        selection: {
          enabled: true,
          xaxis: {
            min: min,
            max: max
          }
        }
      },
      colors: ["#F20D5E"],

      yaxis: {
        show: false,
        tickAmount: 3
      }
    }

    this.scatterChartOptions = {
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1,
        type: "solid"
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            fontSize: '16px',
            fontFamily: 'Montserrat',
            colors: ["262626"]
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '16px',
            fontFamily: 'Montserrat',
            colors: ["262626"]
          },
          offsetX: -6
        },
      },

      series: [
        {
          name: 'series',
          data: series ?? []
        }
      ],
      chart: {
        id: 'scatterchart',
        height: '100%',
        type: "scatter",
        background: "white",
        toolbar: {
          show: false,
          autoSelected: "pan"
        },
        events: {
          dataPointSelection: (e: any, chart?: any, options?: any) => {
            this.onItemClick.emit(options.w.globals.initialSeries[options.seriesIndex].data[options.dataPointIndex]);
          }
        }
      },
      colors: ["#7BD39A"],
      legend: {
        position: "top",
        horizontalAlign: "center"
      },
      markers: {
        width: 5,
        shape: "square",
        strokeWidth: 5,
        strokeColors: "#000000",
        strokeOpacity: 1,
        colors: ["#FFFFFF"],
        discrete: series.map((value, dataPointIndex) =>
          ({
            seriesIndex: 0,
            dataPointIndex: dataPointIndex,
            fillColor: '#fff',
            strokeColor: value.color ?? '#262626',
            size: 7
          })
        )
      },
      tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex, w }) => {
          const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          let tooltip =
            `<div class="tooltip-base">` +
            `  <div class="tooltip-header">${data.tooltipHeader}</div>` +
            `  <div class="tooltip-content">`;

          this.options.tooltipInfo.forEach(info => {
            if (data.meta[info.value]) {
              tooltip +=
                `    <div class="tooltip-data">` +
                `      <a>${info.title}: </a>` +
                `      <a style="font-weight: 500">${data.meta[info.value]}</a>` +
                `    </div>`;
            }
          });

          tooltip +=
            `    <div class="tooltip-data">` +
            `      <a style="font-weight: 500">${this.datePipe.transform(w.globals.seriesX[seriesIndex][dataPointIndex], 'dd/MM/yyyy')}</a>` +
            `    </div>`;

          tooltip +=
            '  </div>' +
            '</div>';
          return tooltip;
        }
      },
    }
  }
}
