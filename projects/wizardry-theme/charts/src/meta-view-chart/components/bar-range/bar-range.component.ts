import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MetaViewElementData} from "../../model/meta-view-element-data";

@Component({
  selector: 'biit-bar-range',
  templateUrl: './bar-range.component.html',
  styleUrls: ['./bar-range.component.css']
})
export class BarRangeComponent {
  @Input('items') set _items(value:  MetaViewElementData[] ) {
    this.items = value;
    this.range = [Math.min(...this.items.map(d => d.data[this.field])), Math.max(...this.items.map(d => d.data[this.field]))];
  }
  @Input() field: string;
  @Input('range') set _range(value :number[]) {
    if (!value || value.length !== 2) {
      this.range = [Math.min(...this.items.map(d => d.data[this.field])), Math.max(...this.items.map(d => d.data[this.field]))];
      return;
    }
    this.range = value;
  }
  @Output() rangeChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  protected items: MetaViewElementData[];
  protected range: number[] = [0, 0];

  protected onRangeChange(range: any) {
    this.rangeChange.emit(range);
  }
}
