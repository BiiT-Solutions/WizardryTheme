import {ColumnDataPipe} from './column-data-pipe';

describe('ColumnDataPipe', () => {
  it('extracts top-level property', () => {
    const pipe = new ColumnDataPipe();
    const row = {name: 'Michael Scott', team: 'Sales'};

    expect(pipe.transform(row, 'name')).toBe('Michael Scott');
  });

  it('extracts nested property path', () => {
    const pipe = new ColumnDataPipe();
    const row = {
      user: {
        profile: {
          title: 'Regional Manager',
        },
      },
    };

    expect(pipe.transform(row, 'user.profile.title')).toBe('Regional Manager');
  });
});

