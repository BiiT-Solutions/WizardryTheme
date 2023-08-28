export class HeatmapChartRange {
  from: number;
  to: number;
  color: string;

  constructor(from: number, to: number, color: string) {
    this.from = from;
    this.to = to;
    this.color = color
  }
}
