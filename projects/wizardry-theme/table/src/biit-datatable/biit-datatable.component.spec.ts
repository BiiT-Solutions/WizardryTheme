import {BiitDatatableComponent} from './biit-datatable.component';
import {DatatableColumn} from './models/datatable-column';

class BiitIconServiceStub {
  registerIcons = jasmine.createSpy('registerIcons');
}

describe('BiitDatatableComponent', () => {
  it('initializes icon registry in constructor', () => {
    const iconService = new BiitIconServiceStub();

    new BiitDatatableComponent<any>(iconService as any);

    expect(iconService.registerIcons).toHaveBeenCalled();
  });

  it('updates data and clears current selection when setting data', () => {
    const component = new BiitDatatableComponent<any>(new BiitIconServiceStub() as any);
    component.selected = [{id: 10}];

    const input = [{id: 1}, {id: 2}];
    component.data = input;

    expect(component.data).toEqual(input);
    expect(component.allData).toEqual(input);
    expect(component.selectedRows).toEqual([]);
  });

  it('keeps only visible columns when setting columns', () => {
    const component = new BiitDatatableComponent<any>(new BiitIconServiceStub() as any);
    const columns = [
      new DatatableColumn('Name', 'name', true),
      new DatatableColumn('Hidden', 'hidden', false),
    ];

    component.columns = columns;

    expect(component.allColumns).toEqual(columns);
    expect(component.columns.length).toBe(1);
    expect(component.columns[0].name).toBe('Name');
  });

  it('returns highlight class only when predicate matches', () => {
    const component = new BiitDatatableComponent<any>(new BiitIconServiceStub() as any);
    component.rowStyleClass = 'highlight';
    component.rowStylePredicate = row => row.marked === true;

    expect(component.getRowClass({marked: true})).toBe('highlight');
    expect(component.getRowClass({marked: false})).toBe('');
  });

  it('emits selected rows on select and plain cell click', () => {
    const component = new BiitDatatableComponent<any>(new BiitIconServiceStub() as any);
    const selectionSpy = jasmine.createSpy('selectionSpy');
    component.onSelection.subscribe(selectionSpy);

    component.onSelect({selected: [{id: 1}, {id: 2}]});
    expect(component.selectedRows).toEqual([{id: 1}, {id: 2}]);
    expect(selectionSpy).toHaveBeenCalledWith([{id: 1}, {id: 2}]);

    component.onActivate({
      type: 'click',
      column: {name: 'name'},
      row: {id: 3},
      event: null,
      value: null,
      cellElement: null,
      rowElement: null,
    } as any);

    expect(component.selectedRows).toEqual([{id: 3}]);
    expect(selectionSpy).toHaveBeenCalledWith([{id: 3}]);
  });

  it('ignores checkbox cell click and updates footer page event', () => {
    const component = new BiitDatatableComponent<any>(new BiitIconServiceStub() as any);
    const selectionSpy = jasmine.createSpy('selectionSpy');
    const pageSpy = jasmine.createSpy('pageSpy');
    component.selected = [{id: 7}];
    component.onSelection.subscribe(selectionSpy);
    component.onPageChange.subscribe(pageSpy);

    component.onActivate({
      type: 'click',
      column: {name: 'chkbox'},
      row: {id: 8},
      event: null,
      value: null,
      cellElement: null,
      rowElement: null,
    } as any);

    expect(component.selectedRows).toEqual([{id: 7}]);
    expect(selectionSpy).not.toHaveBeenCalled();

    component.onFooterPageChange({offset: 2, pageSize: 10, count: 50});
    expect(pageSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      pageNumber: 2,
      pageSize: 10,
      totalElements: 50,
    }));
  });

  it('applies column visibility from selected column list', () => {
    const component = new BiitDatatableComponent<any>(new BiitIconServiceStub() as any);
    const nameColumn = new DatatableColumn('Name', 'name', true);
    const titleColumn = new DatatableColumn('Title', 'title', true);
    component.columns = [nameColumn, titleColumn];

    component.setColumnVisibility([titleColumn]);

    expect(component.columns).toEqual([titleColumn]);
  });
});

