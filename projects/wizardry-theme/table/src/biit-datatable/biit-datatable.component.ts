import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {DatatableColumn} from "./models/datatable-column";
import {ColumnMode, DatatableComponent, SelectionType} from "@siemens/ngx-datatable";
import {completeIconSet} from '@biit-solutions/biit-icons-collection';
import {BiitIconService} from "@biit-solutions/wizardry-theme/icon";
import {BiitMultiselectType} from "@biit-solutions/wizardry-theme/inputs";
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {GenericFilter} from "../utils/generic-filter";
import {provideTranslocoScope} from "@ngneat/transloco";
import {Page} from "./models/page";

@Component({
  selector: 'biit-datatable',
  templateUrl: './biit-datatable.component.html',
  styleUrls: ['./biit-datatable.component.scss'],
  providers: [provideTranslocoScope({scope: 'wizardry-theme/table', alias: 't'})]
})
export class BiitDatatableComponent<T> implements OnInit {
  @ViewChild('table') table: DatatableComponent;

  _data: T[] = [];
  allData: T[] = [];

  @Input() set data(data: T[]) {
    this._data = data ?? [];
    this.allData = data ?? [];
    this.selected = [];
  }

  get data(): T[] {
    return this._data;
  }

  _columns: DatatableColumn[] = [];
  allColumns: DatatableColumn[] = [];

  @Input() set columns(columns: DatatableColumn[]) {
    this.allColumns = columns ?? [];
    this._columns = columns.filter(c => c.visible);
  }

  get columns(): DatatableColumn[] {
    return this._columns;
  }

  selected: T[] = [];

  public get selectedRows(): T[] {
    return this.selected;
  }

  public set selectedRows(rows: T[]) {
    this.selected.splice(0, this.selected.length);
    if (rows) {
      this.selected.push(...rows);
    }
  }

  @Input() pageSize?: number;
  @Input() pageSizeList: number[] = [];
  @Input() loading = false;
  @Input() selectable?: any;
  @Input() singleSelection?: any;
  @Input() scrollbarH?: any;
  @Input() hideHeader?: any;
  @Input() hideFooter?: any;
  @Input() serverSide?: any;
  @Input() page?: Page;
  search: string = "";

  @Output() onSelection: EventEmitter<T[]> = new EventEmitter<T[]>();
  @Output() onPageChange: EventEmitter<Page> = new EventEmitter<Page>();

  @ContentChild('actions') actionsTpl!: TemplateRef<any>;

  protected readonly ColumnMode = ColumnMode;
  protected readonly SelectionType = SelectionType;
  protected readonly BiitMultiselectType = BiitMultiselectType;
  private findTimeout: NodeJS.Timeout;

  constructor(biitIconService: BiitIconService) {
    biitIconService.registerIcons(completeIconSet);
  }

  ngOnInit() {
    this.selectable = coerceBooleanProperty(this.selectable);
    this.singleSelection = coerceBooleanProperty(this.singleSelection);
    this.scrollbarH = coerceBooleanProperty(this.scrollbarH);
    this.hideHeader = coerceBooleanProperty(this.hideHeader);
    this.hideFooter = coerceBooleanProperty(this.hideFooter);
    this.serverSide = coerceBooleanProperty(this.serverSide);
  }

  onSelect({selected}) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.onSelection.emit(this.selected);
  }

  onActivate(event: { type: 'keydown' | 'click' | 'dblclick', event, row, column, value, cellElement, rowElement }) {
    if (event.type == 'click' && event.column.name !== 'chkbox') {
      this.selected = [event.row];
      this.onSelection.emit(this.selected);
    }
  }

  onFilter(value: string, force: boolean = false) {
    if (this.findTimeout) {
      clearTimeout(this.findTimeout);
    }
    this.findTimeout = setTimeout(() => {
      this.search = value;
      const val = value.toLowerCase();

      // filter our data
      const temp: T[] = this.allData.filter(item => GenericFilter.filter(item, val, true));

      // update the rows
      this._data = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
      clearTimeout(this.findTimeout);
      this.findTimeout = null;
    }, force ? 0 : 500);
  }

  onFooterPageChange(event: any) {
    const page = new Page(event.offset, event.pageSize, event.count);
    this.onPageChange.emit(page);
  }

  setColumnVisibility(columns: DatatableColumn[]) {
    this._columns = this.allColumns.filter(c => columns.includes(c))
  }
}
