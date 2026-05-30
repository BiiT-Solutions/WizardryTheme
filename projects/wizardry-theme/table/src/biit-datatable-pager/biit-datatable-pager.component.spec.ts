import {BiitDatatablePagerComponent} from './biit-datatable-pager.component';

class BiitIconServiceStub {
  registerIcons = jasmine.createSpy('registerIcons');
}

describe('BiitDatatablePagerComponent', () => {
  it('registers icons in constructor', () => {
    const iconService = new BiitIconServiceStub();

    new BiitDatatablePagerComponent(iconService as any);

    expect(iconService.registerIcons).toHaveBeenCalled();
  });

  it('enforces min and max values only when input is not empty', () => {
    const component = new BiitDatatablePagerComponent(new BiitIconServiceStub() as any);

    const minEl = {value: '1', min: '3', max: '10'};
    component.enforceMinMax(minEl);
    expect(minEl.value).toBe('3');

    const maxEl = {value: '20', min: '3', max: '10'};
    component.enforceMinMax(maxEl);
    expect(maxEl.value).toBe('10');

    const emptyEl = {value: '', min: '3', max: '10'};
    component.enforceMinMax(emptyEl);
    expect(emptyEl.value).toBe('');
  });
});

