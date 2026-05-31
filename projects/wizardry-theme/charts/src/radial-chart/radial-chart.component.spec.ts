import {RadialChartComponent} from './radial-chart.component';

describe('RadialChartComponent', () => {
  it('should create', () => {
    const refStub = {nativeElement: {querySelector: () => null}};

    const component = new RadialChartComponent(refStub as any);

    expect(component).toBeTruthy();
  });
});

