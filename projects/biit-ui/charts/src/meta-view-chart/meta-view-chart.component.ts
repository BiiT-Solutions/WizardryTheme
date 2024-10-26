import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MetaViewElementData} from "./model/meta-view-element-data";

@Component({
  selector: 'biit-meta-view-chart',
  templateUrl: './meta-view-chart.component.html',
  styleUrls: ['./meta-view-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MetaViewChartComponent implements OnInit {
  protected elements: MetaViewElementData[] = [];
  protected selectedElement: MetaViewElementData;

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.elements.push(new MetaViewElementData({},`border-radius: 100%; background-color: ${this.getRandomColor()} `));
    }
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  protected onElementClick(element: MetaViewElementData) {
    this.selectedElement = element;
  }
}
