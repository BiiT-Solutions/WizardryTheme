import {GenericSort} from './generic-sort';
import {BiitTableColumn, BiitTableColumnFormat} from '../biit-table/models/biit-table-column';
import {BiitTableSorting, BiitTableSortingOrder} from '../biit-table/models/biit-table-sorting';

describe('GenericSort', () => {
  it('returns original data when sorting is undefined', () => {
    const data = [{name: 'b'}, {name: 'a'}];
    const columns = [new BiitTableColumn('name', 'Name')];

    const result = GenericSort.sort(data, undefined as any, columns);

    expect(result).toBe(data);
  });

  it('sorts default format in ascending order', () => {
    const data = [{name: 'b'}, {name: 'a'}];
    const columns = [new BiitTableColumn('name', 'Name', undefined, BiitTableColumnFormat.DEFAULT)];
    const sorting = new BiitTableSorting('name', BiitTableSortingOrder.ASC);

    const result = GenericSort.sort(data, sorting, columns);

    expect(result.map(item => item.name)).toEqual(['a', 'b']);
  });

  it('sorts boolean format in descending order', () => {
    const data = [{active: true}, {active: false}];
    const columns = [new BiitTableColumn('active', 'Active', undefined, BiitTableColumnFormat.BOOLEAN)];
    const sorting = new BiitTableSorting('active', BiitTableSortingOrder.DESC);

    const result = GenericSort.sort(data, sorting, columns);

    expect(result.map(item => item.active)).toEqual([false, true]);
  });

  it('sorts date format in ascending order', () => {
    const data = [
      {created: '2026-05-02T00:00:00.000Z'},
      {created: '2026-05-01T00:00:00.000Z'},
    ];
    const columns = [new BiitTableColumn('created', 'Created', undefined, BiitTableColumnFormat.DATE)];
    const sorting = new BiitTableSorting('created', BiitTableSortingOrder.ASC);

    const result = GenericSort.sort(data, sorting, columns);

    expect(result.map(item => item.created)).toEqual([
      '2026-05-01T00:00:00.000Z',
      '2026-05-02T00:00:00.000Z',
    ]);
  });
});

