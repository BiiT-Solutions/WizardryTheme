export class BarChartData {
  public categories: BarChartCategory[];
  public legend: string[];

  constructor(categories: BarChartCategory[], legend: string[]) {
    this.categories = categories;
    this.legend = legend;
  }
}

export class BarChartCategory {
  name: string;
  values: number[];
  color: string;

  constructor(name: string, values: number[], color: string) {
    this.name = name;
    this.values = values;
    this.color = color;
  }
}
