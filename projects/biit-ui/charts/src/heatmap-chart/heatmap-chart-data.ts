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

  //Values -> metric -> x --> Value
  public static fromElementsAsMap(values: Map<string, Map<string, number>>): HeatmapChartData {
    const heatmapChartDataElements: HeatmapChartDataElement[] = [];
    for (const metric of values.keys()) {
      const heatmapChartDataElement: HeatmapChartDataElement = new HeatmapChartDataElement();
      heatmapChartDataElement.name = metric;

      const sortedMap: Map<string, number> = new Map([...values.get(metric).entries()].sort());
      for (const point of sortedMap) {
        heatmapChartDataElement.data.push({x: point[0], y: point[1]});
      }
      heatmapChartDataElements.push(heatmapChartDataElement);
    }
    return HeatmapChartData.fromMultipleDataElements(heatmapChartDataElements);
  }

  constructor(name?: string[]) {
    this.name = name;
    this.elements = [];
  }

  getLabels(): string[] {
    return this.elements.map(e => e.name);
  }

  getData(): HeatmapChartDataElement[] {
    debugger
    return this.elements;
  }
}

export class HeatmapChartDataElement {
  name: string;
  //X,Y
  data: { x: string, y: number }[];

  constructor(points?: [string, number][], name?: string) {
    if (points) {
      this.data = points.map(point => {
          return {x: point[0], y: point[1]}
        }
      );
    } else {
      this.data = []
    }
    if (name) {
      this.name = name;
    } else {
      this.name = "";
    }
  }
}

export class HeatmapMetric {
  //Metric name (Y Axis)
  name: string = "";
  //Subject value (X Axis + Value in Y)
  data: [string, number][] = [];
}
