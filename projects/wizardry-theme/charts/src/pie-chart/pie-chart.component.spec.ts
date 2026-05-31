import {PieChartComponent} from './pie-chart.component';

describe('PieChartComponent', () => {
  it('should create', () => {
    const refStub = {nativeElement: {querySelector: () => null}};

    const component = new PieChartComponent(refStub as any);

    expect(component).toBeTruthy();
  });
});

