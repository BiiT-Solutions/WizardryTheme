import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {DatatableColumn} from "./models/datatable-column";
import {ColumnMode, DatatableComponent, SelectionType} from "@siemens/ngx-datatable";
import {completeIconSet} from "biit-icons-collection";
import {BiitIconService} from "biit-ui/icon";
import {BiitMultiselectType} from "biit-ui/inputs";
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {GenericFilter} from "../utils/generic-filter";
import {provideTranslocoScope} from "@ngneat/transloco";

@Component({
  selector: 'biit-datatable',
  templateUrl: './biit-datatable.component.html',
  styleUrls: ['./biit-datatable.component.scss'],
  providers: [provideTranslocoScope({scope:'biit-ui/table', alias:'t'})]
})
export class BiitDatatableComponent<T> implements OnInit {
  @ViewChild('table') table: DatatableComponent;

  _data: T[] = [];
  allData: T[] = [];
  @Input() set data(data: T[]) {
    this._data = data ?? [];
    this.allData = data ?? [];
  }
  get data(): T[] {
    return this._data;
  }

  _columns: DatatableColumn[] = [];
  allColumns: DatatableColumn[] = [];
  @Input() set columns(columns: DatatableColumn[]) {
    this.allColumns = columns ?? [];
    this.setColumnVisibility(columns.filter(c => c.visible));
  }
  get columns(): DatatableColumn[] {
    return this._columns;
  }

  selected: T[] = [];
  get selectedRows(): T[] {
    return this.selected;
  }

  @Input() pageSize: number = 10;
  @Input() pageSizeList: number[] = [5, 10, 20];
  @Input() loading = false;
  @Input() selectable?: any;
  @Input() scrollbarH?: any;
  search: string = "";

  @Output() onSelection: EventEmitter<T[]> = new EventEmitter<T[]>();

  protected readonly ColumnMode = ColumnMode;
  protected readonly SelectionType = SelectionType;
  protected readonly BiitMultiselectType = BiitMultiselectType;

  constructor(biitIconService: BiitIconService) {
    biitIconService.registerIcons(completeIconSet);
  }

  ngOnInit() {
    this.selectable = coerceBooleanProperty(this.selectable);
    this.scrollbarH = coerceBooleanProperty(this.scrollbarH);
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.onSelection.emit(this.selected);
  }

  onActivate(event: { type: 'keydown'|'click'|'dblclick', event, row, column, value, cellElement, rowElement }) {
    if (event.type == 'click' && event.column.name !== 'chkbox') {
      this.selected = [event.row];
      this.onSelection.emit(this.selected);
    }
  }

  onFilter(value: string) {
    this.search = value;
    const val = value.toLowerCase();

    // filter our data
    const temp = this.allData.filter(item => GenericFilter.filter(item, val, true));

    // update the rows
    this._data = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  setColumnVisibility(columns: DatatableColumn[]) {
    this._columns = this.allColumns.filter(c => columns.some(col => c.$$id == col.$$id))
  }

  log(...event) {
    console.log(event);
  }
}
