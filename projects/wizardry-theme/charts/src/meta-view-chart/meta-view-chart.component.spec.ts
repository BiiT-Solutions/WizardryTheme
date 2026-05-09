import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaViewChartComponent } from './meta-view-chart.component';

describe('MetaViewComponent', () => {
  let component: MetaViewChartComponent;
  let fixture: ComponentFixture<MetaViewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaViewChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaViewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
