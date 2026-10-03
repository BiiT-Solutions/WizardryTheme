import {ChangeDetectorRef, IterableDiffers} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {BiitDropdownComponent} from './biit-dropdown.component';

describe('BiitDropdownComponent', () => {
  function createComponent() {
    TestBed.configureTestingModule({});
    const elementRefStub = {nativeElement: {querySelector: () => null, contains: () => false}};
    return new BiitDropdownComponent(elementRefStub as any, TestBed.inject(IterableDiffers), jasmine.createSpyObj<ChangeDetectorRef>('ChangeDetectorRef', ['detectChanges']));
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

  it('opens the dropdown when the input receives a pointer interaction', () => {
    const input = document.createElement('input');
    const dropdown = document.createElement('div');
    const elementRef = {nativeElement: {querySelector: (selector: string) => selector === '.input-object' ? input : dropdown}};
    const cdr = jasmine.createSpyObj<ChangeDetectorRef>('ChangeDetectorRef', ['detectChanges']);
    const component = new BiitDropdownComponent(elementRef as any, TestBed.inject(IterableDiffers), cdr);
    spyOn(globalThis, 'setTimeout').and.callFake((callback: () => void) => {
      callback();
      return 0 as unknown as ReturnType<typeof setTimeout>;
    });

    component.openDropdown();

    expect(component.dropdownOpen).toBeTrue();
    expect(dropdown.getAttribute('aria-expanded')).toBe('true');
    expect(cdr.detectChanges).toHaveBeenCalled();
  });
});
