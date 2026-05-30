import {IterableDiffers} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {BiitMultiselectComponent, BiitMultiselectType} from './biit-multiselect.component';

describe('BiitMultiselectComponent', () => {
  function createComponent() {
    TestBed.configureTestingModule({});
    const elementRefStub = {nativeElement: {querySelector: () => null, contains: () => false}};
    return new BiitMultiselectComponent(elementRefStub as any, TestBed.inject(IterableDiffers));
  }

  it('should create', () => {
    const component = createComponent();
    expect(component).toBeTruthy();
  });

  it('initializes with default multiselect type', () => {
    const component = createComponent();

    expect((component as any).type).toBe(BiitMultiselectType.DEFAULT);
  });

  it('adds and removes items from currentValues in toggle behavior', () => {
    const component = createComponent();
    component.currentValues = [];

    component.onModelChange('apple');
    expect(component.currentValues).toContain('apple');

    component.onModelChange('apple');
    expect(component.currentValues).not.toContain('apple');
  });

  it('initializes currentValues as empty array on writeValue(null)', () => {
    const component = createComponent();

    component.writeValue(null);

    expect(component.currentValues).toEqual([]);
  });
});

