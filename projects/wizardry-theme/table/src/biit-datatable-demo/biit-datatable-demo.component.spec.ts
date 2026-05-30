import {BiitDatatableDemoComponent} from './biit-datatable-demo.component';
import {Page} from '../biit-datatable/models/page';

describe('BiitDatatableDemoComponent', () => {
  it('slices rows according to incoming page change', () => {
    const component = new BiitDatatableDemoComponent({} as any);

    component.onPageChange(new Page(1, 5, 12));

    expect(component.page.pageNumber).toBe(1);
    expect(component._rows.length).toBe(5);
    expect(component._rows[0].name).toBe('Phyllis Lapin');
  });

  it('returns empty rows when page is out of range', () => {
    const component = new BiitDatatableDemoComponent({} as any);

    component.onPageChange(new Page(9, 5, 12));

    expect(component._rows).toEqual([]);
  });
});


