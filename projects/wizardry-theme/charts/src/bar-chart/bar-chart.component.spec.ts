import {BarChartComponent} from './bar-chart.component';

describe('BarChartComponent', () => {
  it('should create', () => {
    const refStub = {nativeElement: {querySelector: () => null}};

    const component = new BarChartComponent(refStub as any);

    expect(component).toBeTruthy();
  });
});

