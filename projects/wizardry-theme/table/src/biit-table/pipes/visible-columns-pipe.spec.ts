import {VisibleColumnsPipe} from './visible-columns-pipe';
import {BiitTableColumn} from '../models/biit-table-column';

describe('VisibleColumnsPipe', () => {
  it('returns only visible columns', () => {
    const pipe = new VisibleColumnsPipe();
    const columns = [
      new BiitTableColumn('name', 'Name', 120, undefined, true),
      new BiitTableColumn('role', 'Role', 120, undefined, false),
      new BiitTableColumn('email', 'Email', 120, undefined, true),
    ];

    const result = pipe.transform(columns);

    expect(result.map(c => c.name)).toEqual(['name', 'email']);
  });

  it('returns an empty array when all columns are hidden', () => {
    const pipe = new VisibleColumnsPipe();
    const columns = [
      new BiitTableColumn('name', 'Name', 120, undefined, false),
      new BiitTableColumn('role', 'Role', 120, undefined, false),
    ];

    expect(pipe.transform(columns)).toEqual([]);
  });
});

