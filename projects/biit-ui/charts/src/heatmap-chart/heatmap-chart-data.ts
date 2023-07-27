import {HeatmapChartComponent} from './heatmap-chart.component';

export class HeatmapChartData {
  name: string[] | undefined;
  elements: HeatmapChartDataElement[] = [];

  public static fromDataElements(elements: HeatmapChartDataElement): HeatmapChartData {
    const barChartData: HeatmapChartData = new HeatmapChartData();
    barChartData.elements = [];
    barChartData.elements[0] = elements;
    return barChartData;
  }

  public static fromMultipleDataElements(elements: HeatmapChartDataElement[]): HeatmapChartData {
    const barChartData: HeatmapChartData = new HeatmapChartData();
    barChartData.elements = elements;
    return barChartData;
  }

  constructor(name?: string[]) {
    this.name = name;
    this.elements = [];
  }

  getLabels(): string[] {
    return this.elements.map(e => e.name);
  }

  getData(): HeatmapData[] {
    const data: Map<string, HeatmapData> = new Map<string, HeatmapData>();
    for (const element of this.elements) {
      for (const point of element.points) {
        if (data.get(point[0]) === undefined) {
          data.set(point[0], new HeatmapData());
        }
        data.get(point[0])!.name = point[0];
        data.get(point[0])!.data.push(point[1]);
      }
    }
    return Array.from(data.values());
  }
}

export class HeatmapChartDataElement {
  name: string;
  //X,Y
  points: [string, number][];

  constructor(points: [string, number][], name?: string) {
    this.points = points;
    if (name) {
      this.name = name;
    } else {
      this.name = "";
    }
  }
}

export class HeatmapData {
  name: string = "";
  data: number[] = [];
  color: string = "#ff0000"; //Color be set on the chart component
}
