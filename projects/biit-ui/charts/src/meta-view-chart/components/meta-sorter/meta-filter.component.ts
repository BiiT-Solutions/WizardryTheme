import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MetaViewData} from "../../model/meta-view-data";
import {FieldType} from "./model/FieldType";
import {FieldTypePipe} from "../../pipes/field-type.pipe";

@Component({
  selector: 'biit-meta-filter',
  templateUrl: './meta-filter.component.html',
  styleUrls: ['./meta-filter.component.css'],
  providers: [FieldTypePipe]
})
export class MetaFilterComponent {
  @Input() metadata: MetaViewData;
  @Output() filterChange: EventEmitter<Map<string, any>> = new EventEmitter<Map<string, any>>();
  protected selectedField: string = '';
  protected search: string = '';
  protected filter: Map<string, any> = new Map<string, any>();
  protected readonly FieldType = FieldType;


  constructor(private fieldType: FieldTypePipe) {  }

  protected onFieldClick(field: string): void {
    if (this.fieldType.transform(field, this.metadata.data) === FieldType.BOOLEAN) {
      return;
    }
    if (this.selectedField === field) {
      this.selectedField = null;
      return;
    }
    this.selectedField = field;
  }

  protected onRangeChanged(field: string, range: number[]): void {
    this.filter.set(field, range);
    this.detectFilter();
  }

  protected onDateRangeChanged(field: string, range: Date[][]): void {
    range ? this.filter.set(field, range) : this.filter.delete(field);
    this.detectFilter();
  }

  protected onBooleanFilterChanged(field: string, value: boolean): void {
    this.filter.set(field, value);
    this.detectFilter();
  }

  protected removeFilter(field: string): void {
    this.filter.delete(field);
    this.detectFilter();
  }

  protected clearFilters(): void {
    this.filter.clear();
    this.detectFilter();
  }

  private detectFilter(): void {
    this.filter = new Map(this.filter);
    this.filterChange.emit(this.filter);
  }

  onFilterChanged(field: string, value: string): void {
    if (!value) {
      this.filter.delete(field);
    } else {
      this.filter.set(field, value);
    }
    this.detectFilter();
  }
}
