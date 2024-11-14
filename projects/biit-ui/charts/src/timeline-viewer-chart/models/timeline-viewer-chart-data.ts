export class TimelineViewerChartData {
  x: number;
  y: number;
  color: string;
  tooltipHeader: string;
  tooltipTitle1: string;
  tooltipValue1: string;
  tooltipTitle2: string;
  tooltipValue2: string;
  tooltipTitle3: string;
  tooltipValue3: string;
  meta: Object;

  constructor(x: Date,
              y: number,
              tooltipHeader: string,
              tooltipTitle1: string,
              tooltipValue1: string,
              color?: string,
              meta?: Object,
              tooltipTitle2?: string,
              tooltipValue2?: string,
              tooltipTitle3?: string,
              tooltipValue3?: string) {
    this.x = x.getTime();
    this.y = y;
    this.tooltipHeader = tooltipHeader;
    this.tooltipTitle1 = tooltipTitle1;
    this.tooltipValue1 = tooltipValue1;
    if (color) this.color = color;
    if (meta) this.meta = meta;
    if (tooltipTitle2) this.tooltipTitle2 = tooltipTitle2;
    if (tooltipValue2) this.tooltipValue2 = tooltipValue2;
    if (tooltipTitle3) this.tooltipTitle3 = tooltipTitle3;
    if (tooltipValue3) this.tooltipValue3 = tooltipValue3;
  }

  public static generate<Object>(data: Object[], variableNames: {
    date: string,
    tooltipHeader: string,
    tooltipTitle1: string,
    tooltipValue1: string,
    color?: string,
    tooltipTitle2?: string,
    tooltipValue2?: string,
    tooltipTitle3?: string,
    tooltipValue3?: string
  }): TimelineViewerChartData[] {
    const chartData: TimelineViewerChartData[] = [];
    data.forEach(value => {
      const datetime = new Date(value[variableNames.date]).setHours(0,0,0,0);
      const count = chartData.filter(d => d.x == datetime).length;
      chartData.push(new TimelineViewerChartData(
        new Date(datetime),
        count + 1,
        value[variableNames.tooltipHeader],
        value[variableNames.tooltipTitle1],
        value[variableNames.tooltipValue1],
        variableNames.color ? value[variableNames.color] : undefined,
        value,
        variableNames.tooltipTitle2 ? value[variableNames.tooltipTitle2] : undefined,
        variableNames.tooltipValue2 ? value[variableNames.tooltipValue2] : undefined,
        variableNames.tooltipTitle3 ? value[variableNames.tooltipTitle3] : undefined,
        variableNames.tooltipValue3 ? value[variableNames.tooltipValue3] : undefined
      ));
    });

    return chartData;
  }
}
