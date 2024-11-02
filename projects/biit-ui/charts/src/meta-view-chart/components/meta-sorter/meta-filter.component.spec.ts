import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaSorterComponent } from './meta-sorter.component';

describe('MetaSorterComponent', () => {
  let component: MetaSorterComponent;
  let fixture: ComponentFixture<MetaSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaSorterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
