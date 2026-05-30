import {IterableDiffers} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {BiitDropdownComponent} from './biit-dropdown.component';

describe('BiitDropdownComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({});
    const elementRefStub = {nativeElement: {querySelector: () => null, contains: () => false}};

    const component = new BiitDropdownComponent(elementRefStub as any, TestBed.inject(IterableDiffers));

    expect(component).toBeTruthy();
  });
});

