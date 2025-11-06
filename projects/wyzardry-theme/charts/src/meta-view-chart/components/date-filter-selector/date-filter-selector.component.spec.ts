import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFilterSelectorComponent } from './date-filter-selector.component';

describe('DateFilterSelectorComponent', () => {
  let component: DateFilterSelectorComponent;
  let fixture: ComponentFixture<DateFilterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFilterSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateFilterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
