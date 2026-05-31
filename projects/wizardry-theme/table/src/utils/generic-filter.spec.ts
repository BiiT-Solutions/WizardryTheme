import {GenericFilter} from './generic-filter';

describe('GenericFilter', () => {
  it('matches primitive values ignoring case by default', () => {
    const row = {name: 'Dwight', age: 30};

    const result = GenericFilter.filter(row, 'dwight');

    expect(result).toBeTrue();
  });

  it('supports partial matching when includes=true', () => {
    const row = {title: 'Assistant to the Regional Manager'};

    const result = GenericFilter.filter(row, 'regional', true);

    expect(result).toBeTrue();
  });

  it('searches recursively in nested arrays and objects', () => {
    const row = {
      tags: [{label: 'sales'}, {label: 'paper'}],
      owner: {team: {name: 'Scranton'}},
    };

    expect(GenericFilter.filter(row, 'scranton')).toBeTrue();
    expect(GenericFilter.filter(row, 'paper')).toBeTrue();
  });

  it('limits search to provided params when params are set', () => {
    const row = {
      name: 'Pam Beesly',
      title: 'Office Administrator',
    };

    const onlyTitleMatch = GenericFilter.filter(row, 'administrator', true, false, ['title']);
    const excludedNameMatch = GenericFilter.filter(row, 'pam', true, false, ['title']);

    expect(onlyTitleMatch).toBeTrue();
    expect(excludedNameMatch).toBeFalse();
  });
});


