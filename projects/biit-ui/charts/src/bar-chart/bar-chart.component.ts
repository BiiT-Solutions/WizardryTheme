import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries, ApexChart,
  ApexDataLabels, ApexGrid, ApexLegend,
  ApexPlotOptions, ApexTitleSubtitle,
  ApexTooltip, ApexXAxis, ApexYAxis
} from "ng-apexcharts";
import {BiitIconService} from 'biit-ui/icon';
import {BarChartData} from './models/bar-chart-data';
import {fromEvent} from 'rxjs';


export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
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
};


@Component({
  selector: 'biit-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  host: {
    '(document:scroll)': 'handleScroll($event)'
  }
})
export class BarChartComponent implements OnInit, OnChanges, AfterViewInit {

  chartOptions: Partial<BarChartOptions>;
  pageNumber = 1;

  @Input() public data: BarChartData;
  @Input() public colors: string[];
  @Input() public title = '';
  @Input() public width: number;

  get titleSvg(): SVGTextElement {return this.ref.nativeElement.querySelector('.apexcharts-title-text')};
  get toolbarDiv(): HTMLDivElement {return this.ref.nativeElement.querySelector('.apexcharts-toolbar')};
  get yLegend(): SVGGElement {return this.ref.nativeElement.querySelector('.apexcharts-yaxis')};
  get yLegendBg(): SVGRectElement {return this.ref.nativeElement.querySelector('#y-legend-bg')};
  get chartSvg(): SVGSVGElement {return this.ref.nativeElement.querySelector('.apexcharts-svg')};
  yLegendMargin: number = 0;
  scroll$;

  constructor(private biitIconService: BiitIconService,
              private ref: ElementRef) {
  }

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

  ngAfterViewInit() {
    this.scroll$ = fromEvent(this.ref.nativeElement.firstChild, "scroll");

    this.scroll$.subscribe(element => {
      this.handleScroll(element);
    });

    this.toolbarDiv.style.right = this.chartSvg.width.baseVal.value -
      this.ref.nativeElement.clientWidth + 3 + 'px';
    console.log(this.ref.nativeElement.clientWidth)
  }

  handleScroll(event: Event) {
    if (!this.ref.nativeElement.querySelector('#y-legend-bg')) {
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute("id", "y-legend-bg");
      rect.setAttribute("x", "0");
      rect.setAttribute("y", (this.yLegend.firstChild as SVGTextElement).getBBox().y.toString());
      rect.setAttribute("width", (this.yLegend.getBBox().width + 27).toString());
      rect.setAttribute("height", (((this.yLegend.parentElement.lastChild as SVGGElement).getBBox().height) + 20).toString());
      rect.setAttribute("fill", "rgba(255,255,255,1)");
      this.yLegend.before(rect);
      rect.before(this.yLegend.parentElement.lastChild);
    }
    if (this.yLegendMargin == 0) {
      this.yLegendMargin = Number.parseFloat(
        this.yLegend.getAttribute("transform").split("(")[1].split(",")[0]);
    }
    this.yLegend.setAttribute("transform",
      "translate(" + ((event.currentTarget as HTMLElement).scrollLeft + this.yLegendMargin) + ", 0)");
    this.yLegendBg.setAttribute("x", (event.currentTarget as HTMLElement).scrollLeft.toString());
    this.titleSvg.setAttribute("x", ((event.currentTarget as HTMLElement).scrollLeft + 10).toString());
    const right = this.chartSvg.width.baseVal.value -
    (event.currentTarget as HTMLElement).clientWidth - (event.currentTarget as HTMLElement).scrollLeft + 3;
    if (right >= 3)
      this.toolbarDiv.style.right = right + 'px';
  }

  // Converts a screen Y position to SVG units which have a viewBox transform
  screenXtoSVGUnits(val) {
    let pt = this.chartSvg.createSVGPoint();
    pt.x = val;
    pt.y = 0;
    pt = pt.matrixTransform(this.chartSvg.getCTM().inverse());
    return pt.x.toString();
  }

  private createChartOptions() {
    // @ts-ignore
    this.chartOptions = {
      series: this.data.series,
      chart: {
        height: '100%',
        width: this.width ? this.width : '100%',
        type: "bar",
        stacked: this.data.stacked,
        stackType: this.data.stackType
      },
      plotOptions: {
        bar: {
          horizontal: !!this.data.orientation,
          columnWidth: "75%"
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "16px",
          fontFamily: "Montserrat",
          fontWeight: "500"
        }
      },
      xaxis: {
        categories: this.data.legend,
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
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
        },
      },
      fill: {
        opacity: 1
      },
      legend: {
        fontSize: '16px',
        fontFamily: 'Montserrat'
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
        borderColor: '#262626',
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          let tooltip =
            '<div class="tooltip-base">' +
            '  <div class="tooltip-header">' +
                 w.globals.labels[dataPointIndex] +
            '  </div>' +
            '  <div class="tooltip-content">' +
            '    <div class="tooltip-data">' +
            '      <div class="tooltip-square" style="background:'+ w.globals.colors[seriesIndex] +'"></div>' +
            '      <a>' + w.globals.seriesNames[seriesIndex] + ': </a>' +
            '      <a style="margin-left: 0.35rem; font-weight: 500">' + series[seriesIndex][dataPointIndex] + '</a>' +
            '    </div>';

          w.globals.seriesGoals[seriesIndex][dataPointIndex].forEach(goalItem => {
            tooltip +=
              '<div class="tooltip-data">' +
              '  <div class="tooltip-line" style="background:'+ goalItem.strokeColor +'"></div>' +
              '  <a>' + goalItem.name + ': </a>' +
              '  <a style="margin-left: 0.35rem; font-weight: 500">' + goalItem.value + '</a>' +
              '</div>'
          });

          tooltip +=
            '  </div>' +
            '</div>';
          return tooltip;
        }
      },
      colors: this.data.series.map(c => c.color)
    };
  }
}
