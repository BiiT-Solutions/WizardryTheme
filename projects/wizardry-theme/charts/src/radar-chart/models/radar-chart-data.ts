export class RadarChartData {
  series: RadarChartSeries[];
  legend: string[];

  constructor(series: RadarChartSeries[], legend: string[]) {
    this.series = series;
    this.legend = legend;
  }
}

export class RadarChartSeries {
  name: string;
  data: number[];
  color: string; // Color set as '#XXXXXX'

  constructor(name: string, data: number[], color: string) {
    this.name = name;
    this.data = data;
    this.color = color;
  }
}
