import {RadarChartComponent} from './radar-chart.component';

describe('RadarChartComponent', () => {
  it('should create', () => {
    const refStub = {nativeElement: {querySelector: () => null}};

    const component = new RadarChartComponent(refStub as any);

    expect(component).toBeTruthy();
  });
});

