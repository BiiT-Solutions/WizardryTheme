import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PivotViewElementData} from "./model/pivot-view-element-data";

@Component({
  selector: 'biit-pivot-view-chart',
  templateUrl: './pivot-view-chart.component.html',
  styleUrls: ['./pivot-view-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PivotViewChartComponent implements OnInit {
  protected elements: PivotViewElementData[] = [];
  protected selectedElement: PivotViewElementData;

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.elements.push(new PivotViewElementData({},`border-radius: 100%; background-color: ${this.getRandomColor()} `));
    }
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  protected onElementClick(element: PivotViewElementData) {
    this.selectedElement = element;
  }
}
