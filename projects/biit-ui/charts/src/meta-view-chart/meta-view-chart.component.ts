import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MetaViewElementData} from "./model/meta-view-element-data";
import {MetaViewData} from "./model/meta-view-data";

@Component({
  selector: 'biit-meta-view-chart',
  templateUrl: './meta-view-chart.component.html',
  styleUrls: ['./meta-view-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MetaViewChartComponent implements OnInit {
  @Input() data: MetaViewData;
  protected fields: string[] = ['name', 'date', 'v1', 'v2', 'v3'];
  protected elements: MetaViewElementData[] = [];
  protected selectedElement: MetaViewElementData;

  private delayedFilter: NodeJS.Timeout;
  private static FILTER_DELAY: number = 500;

  ngOnInit(): void {
    const gaussianList = this.generateGaussianList(100, 70, 0.05);
    for (let i = 0; i < 100; i++) {
      const data = {name: this.randomString(10), date: this.randomDate(), v1: this.randomInt(50, 84), v2: gaussianList[i], v3: this.randomPercentage()};
      this.elements.push(new MetaViewElementData(data,`border-radius: 100%; background-color: ${this.getRandomColor()} `));
      this.data = new MetaViewData(this.elements, this.fields);
    }
  }

  private generateGaussianRandom(mean: number = 0, stdDev: number = 1): number {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Convert [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return mean + Math.floor((stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v))*100);
  }

  private generateGaussianList(size: number, mean: number = 0, stdDev: number = 1): number[] {
    const list: number[] = [];
    for (let i = 0; i < size; i++) {
      list.push(this.generateGaussianRandom(mean, stdDev));
    }
    return list;
  }

  private randomPercentage(precision: number = 2): number {
    return +Math.random().toFixed(precision);
  }
  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  private randomDate(): Date {
    return new Date(+(new Date()) - Math.floor(Math.random() * 1000000000) *100 );
  }
  private randomString(length: number, chars: string = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'): string {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  protected onElementClick(element: MetaViewElementData) {
    this.selectedElement = element;
  }

  protected onFilter(filters: Map<string, any>): void {
    if (this.delayedFilter != null) {
      clearTimeout(this.delayedFilter);
    }
    this.delayedFilter = setTimeout(() => {
      this.filter(filters);
      this.delayedFilter = null;
    }, MetaViewChartComponent.FILTER_DELAY);
  }

  private filter(filters: Map<string, any>): void {
    this.elements = this.data.data.filter((element: MetaViewElementData) => {
      return !Array.from(filters.entries()).map(filter =>  this.resolveFilter(filter[1], element.data[filter[0]])).some(result => !result);
    });
  }

  private resolveFilter(restriction:  any, value: any): boolean {
    if (Array.isArray(restriction) && !restriction.some(Array.isArray) && restriction.length === 2) {
      return value >= restriction[0] && value <= restriction[1];
    }
    if (Array.isArray(restriction) && restriction.every(Array.isArray)) {
      if (value instanceof Date) {
        return restriction.some(range => (range[0] as Date).getTime() <= value.getTime() && value.getTime() <= (range[1] as Date).getTime());
      }
    }
    return value === restriction;
  }

}


