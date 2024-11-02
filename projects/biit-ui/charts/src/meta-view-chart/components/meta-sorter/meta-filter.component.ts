import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MetaViewData} from "../../model/meta-view-data";
import {FieldType} from "./model/FieldType";

@Component({
  selector: 'biit-meta-filter',
  templateUrl: './meta-filter.component.html',
  styleUrls: ['./meta-filter.component.css']
})
export class MetaFilterComponent {
  @Input() metadata: MetaViewData;
  @Output() filterChange: EventEmitter<Map<string, any>> = new EventEmitter<Map<string, any>>();
  protected selectedField: string = '';
  protected search: string = '';
  protected filter: Map<string, any> = new Map<string, any>();
  protected readonly FieldType = FieldType;

  protected onFieldClick(field: string): void {
    if (this.selectedField === field) {
      this.selectedField = null;
      return;
    }
    this.selectedField = field;
  }

  protected onRangeChanged(field: string, range: number[]) {
    this.filter.set(field, range);
    this.detectFilter();
  }

  protected removeFilter(field: string) {
    this.filter.delete(field);
    this.detectFilter();
  }

  private detectFilter() {
    this.filter = new Map(this.filter);
    this.filterChange.emit(this.filter);
  }
}
