import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels, ApexGrid, ApexLegend,
  ApexPlotOptions, ApexStates, ApexStroke,
  ApexTitleSubtitle, ApexTooltip,
  ApexXAxis, ApexYAxis,
  ChartComponent
} from "ng-apexcharts";
import {HeatmapChartData} from "./heatmap-chart-data";
import {HeatmapChartRange} from "./heatmap-chart-range";
import {completeIconSet} from 'biit-icons-collection';
import {BiitIconService} from 'biit-ui/icon';


export type HeatmapOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: any;
  colors: any;
  stroke: ApexStroke;
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
  selector: 'biit-heatmap',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.scss']
})
export class HeatmapChartComponent implements OnInit, OnChanges {

  @ViewChild("heatmap") chart: ChartComponent;

  heatmapOptions: Partial<HeatmapOptions>;
  pageNumber = 1;

  @Input() public data: HeatmapChartData;
  @Input() public ranges: HeatmapChartRange[] | undefined;
  @Input() public title = '';
  @Input() public itemsPerPage = 20;

  constructor(private biitIconService: BiitIconService) {
    biitIconService.registerIcons(completeIconSet);
  }

  ngOnInit() {
    if (!this.data?.elements?.length) {
      return;
    }
    this.fillDefaultValues();
    this.createHeatmapOptions();
  }

  ngOnChanges() {
    if (!this.data?.elements?.length) {
      return;
    }
    this.fillDefaultValues();
    this.createHeatmapOptions();
  }

  private fillDefaultValues(): void {
    if (!this.ranges.some(r => r.from == -10000 && r.to == -9998 && r.color == "#FFFFFF")) {
      this.ranges.push(new HeatmapChartRange(-10000, -9998, "#FFFFFF"))
    }

    const data : { x: string, y: number | string}[][] = this.data.elements.map(element => element.data);
    const keys: Set<string> = new Set();
    data.flatMap(flatValues => flatValues).forEach(value => keys.add(value.x));
    this.data.elements.map(element => element.data)
      .forEach(data => {
        keys.forEach(key => {
          if(!data.some(element => element.x === key)) {
            data.push({x: key, y: -9999});
          }
        });
        data.sort((a,b) => +a.x-+b.x);
      });

  }

  private createHeatmapOptions() {
    // @ts-ignore
    this.heatmapOptions = {
      series: this.generateSeries(),
      chart: {
        height: 'auto',
        width: '892',
        type: "heatmap",
        events: {
          mounted(chart: any, options?: any) {
            const totalWidth = chart.dimensions.w.globals.dom.elWrap.clientWidth;
            const oldGridWidth = chart.dimensions.w.globals.gridWidth;
            const newGridWidth = options.config.series[0]?.data?.length * 37;
            const newTotalWidth = Math.trunc((totalWidth - oldGridWidth) + newGridWidth);

            const totalHeight = chart.dimensions.w.globals.dom.elWrap.clientHeight;
            const oldGridHeight = chart.dimensions.w.globals.dom.elWrap
              .getElementsByClassName("apexcharts-xcrosshairs")[0].getBoundingClientRect().height;
            const newGridHeight = options.config.series?.length * 35;
            const newTotalHeight = Math.trunc((totalHeight - oldGridHeight) + newGridHeight);

            if (totalHeight !== newTotalHeight || totalWidth !== newTotalWidth) {
              options.config.chart.width = newTotalWidth;
              options.config.chart.height = newTotalHeight;

              chart.updateOptions({
                chart: {
                  width: newTotalWidth,
                  height: newTotalHeight
                },
                legend: {
                  width: newTotalWidth
                }
              })
            }
          },
          updated(chart: any, options?: any) {
            const totalWidth = chart.dimensions.w.globals.dom.elWrap.clientWidth;
            const oldGridWidth = chart.dimensions.w.globals.gridWidth;
            const newGridWidth = options.config.series[0]?.data?.length * 37;
            const newTotalWidth = Math.trunc((totalWidth - oldGridWidth) + newGridWidth);

            const totalHeight = chart.dimensions.w.globals.dom.elWrap.clientHeight;
            const oldGridHeight = chart.dimensions.w.globals.dom.elWrap
              .getElementsByClassName("apexcharts-xcrosshairs")[0].getBoundingClientRect().height;
            const newGridHeight = options.config.series?.length * 35;
            const newTotalHeight = Math.trunc((totalHeight - oldGridHeight) + newGridHeight);

            if (totalHeight !== newTotalHeight || totalWidth !== newTotalWidth) {
              options.config.chart.width = newTotalWidth;
              options.config.chart.height = newTotalHeight;

              chart.updateOptions({
                chart: {
                  width: newTotalWidth,
                  height: newTotalHeight
                },
                legend: {
                  width: newTotalWidth
                }
              })
            }
          }
        }
      },
      plotOptions: {
        heatmap: {
          radius: 20,
          enableShades: false,
          colorScale: {
            ranges: this.ranges
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"],
          fontSize: '16px',
          fontFamily: 'Montserrat',
        },
        formatter: function(value) {
          if(value === -9999) {
            return "";
          } else {
            return value + "";
          }
        }
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
          },
          trim: true,
          minHeight: 120
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
          },
        },
      },
      legend: {
        width: 892,
        fontSize: '16px',
        fontFamily: 'Montserrat',
        itemMargin: {
          vertical: 20,
          horizontal: 20
        },
        formatter: function(value) {
          // Remove decimals on legend
          return Number.parseInt(value.substring(0, value.indexOf(" - "))) + ' / ' + Number.parseInt(value.substring(value.indexOf(" - ")+3, value.length));
        },
        markers: {
          offsetY: -1
        },

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
        enabled: false
      },
      grid: {
        borderColor: '#262626',
        position: 'front',
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      states: {
        active: {
          filter: {
            type: 'lighten',
            value: 0.15
          }
        }
      }
    };
  }

  updateGraph() {
    this.chart.updateSeries(this.generateSeries());
  }

  generateSeries(): ApexAxisChartSeries {
    let series: ApexAxisChartSeries = [];
    this.data.elements.forEach(item => {
      series.push({name: item.name, data: item.data})
    });

    series.forEach(category => {
      category.data = category.data.slice((this.pageNumber-1)*this.itemsPerPage, this.pageNumber*this.itemsPerPage);
      while (category.data.length < this.itemsPerPage) {
        // @ts-ignore
        category.data.push({x:'', y:-9999});
      }
    });

    return series;
  }

  public async getPngBlob(): Promise<Blob> {
    const base64 = await this.chart.dataURI();
    const decode = await fetch(base64.imgURI);
    return decode.blob();
  }
}
