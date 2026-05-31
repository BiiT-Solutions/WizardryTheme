import {BiitTableComponent} from './biit-table.component';
import {BiitTableColumn} from './models/biit-table-column';

function createComponent(): BiitTableComponent {
  const rendererStub = {listen: () => () => undefined} as any;
  const elementRefStub = {nativeElement: {querySelector: () => null}} as any;
  return new BiitTableComponent(rendererStub, elementRefStub);
}

describe('BiitTableComponent', () => {
  it('replaces previous selection when ctrl is not held', () => {
    const component = createComponent();
    const first = {id: 1};
    const second = {id: 2};

    component.selectRow(first, false);
    component.selectRow(second, false);

    expect(component.getSelectedRows()).toEqual([second]);
  });

  it('keeps single-selection behavior even when ctrl is held', () => {
    const component = createComponent();
    component.isSelectableSingle = true;
    const first = {id: 1};
    const second = {id: 2};

    component.selectRow(first, true);
    component.selectRow(second, true);

    expect(component.getSelectedRows()).toEqual([second]);
  });

  it('toggles multi selection when ctrl is held and single mode is off', () => {
    const component = createComponent();
    component.isSelectableSingle = false;
    const first = {id: 1};
    const second = {id: 2};

    component.selectRow(first, true);
    component.selectRow(second, true);
    component.selectRow(first, true);

    expect(component.getSelectedRows()).toEqual([second]);
  });

  it('keeps only rows present in current table data on setSelectedRows', () => {
    const component = createComponent() as any;
    const allowed = {id: 1};
    const excluded = {id: 2};
    component.data = {data: [allowed], totalItems: 1};

    component.setSelectedRows([allowed, excluded]);

    expect(component.getSelectedRows()).toEqual([allowed]);
  });

  it('converts snake and kebab text to camel case', () => {
    const component = createComponent();

    expect(component.snakeToCamel('user_name')).toBe('userName');
    expect(component.snakeToCamel('user-name')).toBe('userName');
  });

  it('updates column visibility based on selected columns', () => {
    const component = createComponent();
    const visible = new BiitTableColumn('name', 'Name');
    const hidden = new BiitTableColumn('role', 'Role');
    component.columns = [visible, hidden];

    component.setColumnVisibility([visible]);

    expect(component.columns[0].visible).toBeTrue();
    expect(component.columns[1].visible).toBeFalse();
  });
});

