import {IterableDiffers} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {BiitMultiselectComponent} from './biit-multiselect.component';

describe('BiitMultiselectComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({});
    const elementRefStub = {nativeElement: {querySelector: () => null, contains: () => false}};

    const component = new BiitMultiselectComponent(elementRefStub as any, TestBed.inject(IterableDiffers));

    expect(component).toBeTruthy();
  });
});

