import {IterableDiffers} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {BiitDropdownComponent} from './biit-dropdown.component';

describe('BiitDropdownComponent', () => {
  function createComponent() {
    TestBed.configureTestingModule({});
    const elementRefStub = {nativeElement: {querySelector: () => null, contains: () => false}};
    return new BiitDropdownComponent(elementRefStub as any, TestBed.inject(IterableDiffers));
  }

  it('should create', () => {
    const component = createComponent();
    expect(component).toBeTruthy();
  });

  it('updates filterText on clear', () => {
    const component = createComponent();
    component.filterText = 'search';

    component.clearFilter();

    expect(component.filterText).toBe('');
  });

  it('registers and calls onChange callback', () => {
    const component = createComponent();
    const onChange = jasmine.createSpy('onChange');
    component.registerOnChange(onChange);
    component.data = ['option'];
    component.primitive = true;

    component.onChange('value');

    expect(onChange).toHaveBeenCalledWith('value');
  });
});

