import {TimelineViewerChartOptions} from "./timeline-viewer-chart-options";

export class TimelineViewerChartData {
  x: number;
  y: number;
  color: string;
  tooltipHeader: string;
  tooltipInfo: {title: string, value: string}[] = [];
  meta: Object;

  constructor(x: Date,
              y: number,
              tooltipHeader: string,
              tooltipInfo: {title: string, value: string}[],
              color?: string,
              meta?: Object) {
    this.x = x.getTime();
    this.y = y;
    this.tooltipHeader = tooltipHeader;
    this.tooltipInfo = tooltipInfo;
    if (color) this.color = color;
    if (meta) this.meta = meta;
  }

  public static generate<Object>(data: Object[], options: TimelineViewerChartOptions): TimelineViewerChartData[] {
    const chartData: TimelineViewerChartData[] = [];
    data.forEach(value => {
      const datetime = new Date(value[options.date]).setHours(0,0,0,0);
      const count = chartData.filter(d => d.x == datetime).length;
      chartData.push(new TimelineViewerChartData(
        new Date(datetime),
        count + 1,
        value[options.tooltipHeader],
        options.tooltipInfo,
        options.color ? value[options.color] : undefined,
        value
      ));
    });

    return chartData;
  }
}
