import {BarChartComponent} from './bar-chart.component';

describe('BarChartComponent', () => {
  function createComponent() {
    const refStub = {nativeElement: {querySelector: () => null}};
    return new BarChartComponent(refStub as any);
  }

  it('should create', () => {
    const component = createComponent();
    expect(component).toBeTruthy();
  });

  it('skips chart initialization if data series is empty', () => {
    const component = createComponent();
    component.data = undefined as any;

    component.ngOnInit();

    expect(component.chartOptions).toBeUndefined();
  });

  it('initializes page number on creation', () => {
    const component = createComponent();
    expect(component.pageNumber).toBe(1);
  });
});

