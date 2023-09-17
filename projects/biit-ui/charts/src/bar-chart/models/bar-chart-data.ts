export class BarChartData {
  series: BarChartSeries[];
  legend: string[];
  orientation: BarChartOrientation;
  stacked: boolean;
  stackType: '100%' | 'normal';

  constructor(series: BarChartSeries[], legend: string[], orientation?: BarChartOrientation, stacked?: boolean, stackType?: '100%' | 'normal') {
    this.series = series;
    this.legend = legend;
    orientation ? this.orientation = orientation : null;
    this.stacked = !!stacked;
    stackType ? this.stackType = stackType : null;
  }
}

export class BarChartSeries {
  name: string;
  data: BarChartSeriesData[];
  color: string; // Color set as '#XXXXXX'
  group: string;

  constructor(name: string, data: BarChartSeriesData[], color: string, group?: string) {
    this.name = name;
    this.data = data;
    this.color = color;
    group ? this.group = group : null;
  }
}

export class BarChartSeriesData {
  x = '';
  y: number;
  goals: BarChartGoal[];

  constructor(value: number, goals?: BarChartGoal[]) {
    this.y = value;
    goals ? this.goals = goals : null;
  }
}

export class BarChartGoal {
  name: string;
  value: number;
  strokeColor: string; // Color set as '#XXXXXX'

  constructor(name: string, value: number, strokeColor: string) {
    this.name = name;
    this.value = value;
    this.strokeColor = strokeColor;
  }
}

export enum BarChartOrientation {
  HORIZONTAL = 1,
  VERTICAL = 0
}
