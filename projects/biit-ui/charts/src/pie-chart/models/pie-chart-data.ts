export class PieChartData {
  data: number[];
  legend: string[];

  constructor(data: number[], legend: string[]) {
    this.data = data;
    this.legend = legend;
  }
}
