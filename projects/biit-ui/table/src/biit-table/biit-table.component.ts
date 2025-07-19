import {
  AfterViewChecked,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import {BiitPaginatorOptions} from '../biit-paginator/models/biit-paginator-options';
import {BiitTableColumn, BiitTableColumnFormat} from './models/biit-table-column';
import {ColumnResizeHandler} from './models/column-resize-handler';
import {BiitTableResponse} from './models/biit-table-response';
import {BiitTableData} from './models/biit-table-data';
import {BiitTableSorting, BiitTableSortingOrder} from './models/biit-table-sorting';
import {BiitMultiselectType} from 'biit-ui/inputs';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';
import {BiitTableActionResponse} from "./models/biit-table-action-response";

@Directive({
  selector: '[selectable]'
})
export class BiitTableSelectableDirective {
  constructor(private parent: BiitTableComponent) {
    parent.isSelectable = true;
  }
}

@Directive({
  selector: '[selectableSingle]'
})
export class BiitTableSelectableSingleDirective {
  constructor(private parent: BiitTableComponent) {
    parent.isSelectableSingle = true;
  }
}

@Directive({
  selector: '[sortable]'
})
export class BiitTableSortableDirective {
  constructor(private parent: BiitTableComponent) {
    parent.isSortable = true;
  }
}

@Directive({
  selector: '[hideHeader]'
})
export class BiitTableHeaderlessDirective {
  constructor(private parent: BiitTableComponent) {
    parent.hideHeader = true;
  }
}

@Directive({
  selector: '[hideFooter]'
})
export class BiitTableFooterlessDirective {
  constructor(private parent: BiitTableComponent) {
    parent.hideFooter = true;
  }
}

@Component({
  selector: 'biit-table',
  templateUrl: './biit-table.component.html',
  styleUrls: ['./biit-table.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/table', alias: "table"}
  }]
})
export class BiitTableComponent implements OnInit, AfterViewChecked {

  @Input('metadata') set _data(data: BiitTableData<any>) {
    if (data) {
      this.data = data;
      this.selectedRows.clear();
      if (this.paginator) {
        this.paginator = new BiitPaginatorOptions(this.paginator.currentPage, this.paginator.pageSize, this.pageSizes, data.totalItems);
      }
    }
  }
  @Input('loading') set _loading(loading: boolean) {
    if (loading) {
      this.loading = loading;
      this.setLoadingBar();
    } else {
      this.loading = false;
    }
  }
  @Input() columns: BiitTableColumn[] = [];
  @Input() pageSizes: number[] = [];
  @Input() defaultPageSize: number;
  isSelectable: boolean = false;
  isSelectableSingle: boolean = false;
  isSortable: boolean = false;
  hideHeader: boolean = false;
  hideFooter: boolean = false;

  @Output() onUpdate: EventEmitter<BiitTableResponse> = new EventEmitter<BiitTableResponse>();
  @Output() onCellAction: EventEmitter<BiitTableActionResponse> = new EventEmitter<BiitTableActionResponse>();
  @Output() onRowClick : EventEmitter<any> = new EventEmitter<any>();

  protected data: BiitTableData<any>;
  protected paginator;
  protected sorting: BiitTableSorting;
  protected selectedRows: Set<any> = new Set<any>();
  protected columnResize: ColumnResizeHandler = new ColumnResizeHandler();
  protected loading: boolean = false;
  protected search: string = '';
  protected currentSearch: string = '';
  protected readonly BiitMultiselectType = BiitMultiselectType;
  protected readonly BiitTableColumnFormat = BiitTableColumnFormat;

  constructor(private renderer: Renderer2,
              private elem: ElementRef) { }

  ngOnInit(): void {
    this.paginator = new BiitPaginatorOptions(1, this.defaultPageSize, this.pageSizes, this.data ? this.data.totalItems : 1);
  }

  ngAfterViewChecked() {
    this.setColumnSize();
  }

  // Fix for resizable columns
  private setColumnSize() {
    // Takes scrollbar padding in mind before hardcoding widths
    this.elem.nativeElement.querySelector('.content').style.paddingRight = '0.7rem';

    Array.from(this.elem.nativeElement.querySelector('thead').firstChild.children).forEach(ogColumn => {
      const column = ogColumn as HTMLElement;

      if (column.classList.contains('select')) {
        return;
      }
      if (column.style.width == '' && !column.classList.contains('select')) {
        column.style.width = column.offsetWidth - 10 + 'px';
      }
      this.columnInnerWordFitCheck(column);
    });
    this.elem.nativeElement.querySelector('.content').style.paddingRight = null;

    this.setLoadingBar();
  }

  columnInnerWordFitCheck(column: HTMLElement) {
    const minColumnSize = (column.firstElementChild as HTMLElement).offsetWidth
      + 2.4 * parseFloat(getComputedStyle(document.documentElement).fontSize) * 2;

    // If inner text width plus header paddings are less than the current header width (set by user column properties)
    if(minColumnSize > column.offsetWidth) {
      (column as HTMLElement).style.width = minColumnSize + 'px';
    }
  }

  setLoadingBar(): void {
    const progressBar = this.elem.nativeElement.querySelector('biit-progress-bar');
    if (progressBar) {
      progressBar.style.top =
        this.elem.nativeElement.querySelector('thead').offsetHeight + 'px';
    }
  }

  onTableUpdate() {
    this.currentSearch = this.search;
    this.selectedRows.clear();
    this.onUpdate.emit(new BiitTableResponse(
      this.paginator.currentPage,
      this.paginator.pageSize,
      this.search,
      this.sorting
    ));
  }

  onTableSort(column: BiitTableColumn) {
    if (this.sorting && this.sorting.name == column.name) {
      switch (this.sorting.order) {
        case BiitTableSortingOrder.ASC:
          this.sorting.order = BiitTableSortingOrder.DESC;
          break;
        case BiitTableSortingOrder.DESC:
          this.sorting = undefined;
          break;
      }
    } else {
      this.sorting = new BiitTableSorting(column.name, BiitTableSortingOrder.ASC);
    }

    this.onTableUpdate();
  }

  snakeToCamel(string: string): string {
    return string.toLowerCase().replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());
  }

  resizeColumn(event, column: BiitTableColumn, index) {
    this.columnResize.start = event.target;
    this.columnResize.pressed = true;
    this.columnResize.startX = event.x;
    this.columnResize.startWidth = (this.columnResize.start.parentNode as HTMLElement).offsetWidth;

    let columnElem = this.elem.nativeElement.querySelector('thead').firstChild.children[this.isSelectable ? index + 1 : index];
    this.columnResize.minWidth = (columnElem.firstElementChild as HTMLElement).offsetWidth
      + 2.4 * parseFloat(getComputedStyle(document.documentElement).fontSize) * 2;

    this.initResizableColumns(column);
  }

  private initResizableColumns(column: BiitTableColumn) {
    const moveListener = this.renderer.listen('window', 'mousemove', (event) => {
      if(this.columnResize.pressed) {
        let width = this.columnResize.startWidth + (event.x - this.columnResize.startX);
        if(width > this.columnResize.minWidth) {
          column.width = width;
        }
      }
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    });
    const releaseListener = this.renderer.listen('window', 'mouseup', (event) => {
      if(this.columnResize.pressed) {
        this.columnResize.pressed = false;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        moveListener();
        releaseListener();
      }
      return false;
    });
  }

  setColumnVisibility(response: BiitTableColumn[]) {
    this.columns.forEach(c => response.some(e => e.name == c.name) ? c.visible = true : c.visible = false);
  }

  selectRow(item, holdCtrl) {
    if (!holdCtrl || this.isSelectableSingle) {
      this.selectedRows.clear();
      this.selectedRows.add(item);
    } else {
      if (!this.selectedRows.has(item)) {
        this.selectedRows.add(item);
      } else {
        this.selectedRows.delete(item);
      }
    }
  }

  getSelectedRows(): any[] {
    return [...this.selectedRows];
  }

  emitCellAction(item: any, column: string, event: Event) {
    event.stopPropagation();
    this.onCellAction.emit(new BiitTableActionResponse(item, column));
  }

  emitRowClick(item: any) {
    this.onRowClick.emit(item);
  }

  resetInputValue() {
    this.search = this.currentSearch;
  }
}
