export class BarChartData {
  series: BarChartSeries[];
  legend: string[];
  orientation: BarChartOrientation;
  stacked: boolean;
  stackType: '100%' | 'normal';

  constructor(series: BarChartSeries[], legend: string[], orientation?: BarChartOrientation, stacked?: boolean, stackType?: '100%' | 'normal') {
    this.series = series;
    this.legend = legend;
    this.orientation = orientation ? orientation : BarChartOrientation.VERTICAL;
    this.stacked = !!stacked;
    this.stackType = stackType ? stackType : undefined;
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
    this.group = group ? group : undefined;
  }
}

export class BarChartSeriesData {
  x = '';
  y: number;
  goals: BarChartGoal[];

  constructor(value: number, goals?: BarChartGoal[]) {
    this.y = value;
    this.goals = goals ? goals : [];
  }
}

export class BarChartGoal {
  name: string;
  value: number;
  strokeColor: string; // Color set as '#XXXXXX'
  strokeHeight: number;
  strokeWidth: number;

  constructor(name: string, value: number, strokeColor: string, strokeHeight?: number, strokeWidth?: number) {
    this.name = name;
    this.value = value;
    this.strokeColor = strokeColor;
    this.strokeHeight = strokeHeight;
    this.strokeWidth = strokeWidth;
  }
}

export enum BarChartOrientation {
  HORIZONTAL = 1,
  VERTICAL = 0
}
