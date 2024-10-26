import { Pipe, PipeTransform } from '@angular/core';
import {MetaViewElementData} from "../model/meta-view-element-data";
import {BarChartData, BarChartSeries, BarChartSeriesData} from "biit-ui/charts";

@Pipe({
  name: 'metaElementToBarChart'
})
export class MetaElementToBarChartPipe implements PipeTransform {

  transform(data: MetaViewElementData[], field: string, color: string = '#f20d5e'): BarChartData {
    const values: number[] = data.map(item => item.data[field] as number);
    const groupedValues: Map<number, number> = new Map();
    values.forEach(value => {
      if (groupedValues.has(value)) {
        groupedValues.set(value, groupedValues.get(value) + 1);
      } else {
        groupedValues.set(value, 1);
      }
    });
    const sortedMap = new Map([...groupedValues.entries()].sort((a, b) => a[0] - b[0]));
    const barChartSeries: BarChartSeries[] = [new BarChartSeries(field,
      Array.from(sortedMap.values()).map(value => new BarChartSeriesData(value)),
      color)];
    return new BarChartData(barChartSeries, Array.from(sortedMap.keys()).map(value => value.toString()));
  }

}
