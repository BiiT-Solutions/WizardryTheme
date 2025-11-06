export class LineChartData {
  series: LineChartSeries[];
  legend: string[];

  constructor(series: LineChartSeries[], legend: string[]) {
    this.series = series;
    this.legend = legend;
  }
}

export class LineChartSeries {
  name: string;
  type: 'line' | 'column' | 'area';
  data: number[];
  color: string; // Color set as '#XXXXXX'

  constructor(name: string, type: 'line' | 'column' | 'area', data: number[], color: string) {
    this.name = name;
    this.type = type;
    this.data = data;
    this.color = color;
  }
}
