import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotElementComponent } from './pivot-element.component';

describe('PivotElementComponent', () => {
  let component: PivotElementComponent;
  let fixture: ComponentFixture<PivotElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PivotElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
