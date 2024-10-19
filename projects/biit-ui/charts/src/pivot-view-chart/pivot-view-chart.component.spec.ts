import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotViewChartComponent } from './pivot-view-chart.component';

describe('PivotViewComponent', () => {
  let component: PivotViewChartComponent;
  let fixture: ComponentFixture<PivotViewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotViewChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PivotViewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
