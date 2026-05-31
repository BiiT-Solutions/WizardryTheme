import {HeatmapChartComponent} from './heatmap-chart.component';

describe('HeatmapChartComponent', () => {
  it('should create and register icons', () => {
    const iconService = {registerIcons: jasmine.createSpy('registerIcons')};

    const component = new HeatmapChartComponent(iconService as any);

    expect(component).toBeTruthy();
    expect(iconService.registerIcons).toHaveBeenCalled();
  });

  it('skips heatmap initialization if data elements are empty', () => {
    const iconService = {registerIcons: () => undefined};
    const component = new HeatmapChartComponent(iconService as any);
    component.data = undefined as any;

    component.ngOnInit();

    expect(component.heatmapOptions).toBeUndefined();
  });

  it('initializes page number and items per page', () => {
    const iconService = {registerIcons: () => undefined};
    const component = new HeatmapChartComponent(iconService as any);

    expect(component.pageNumber).toBe(1);
    expect(component.itemsPerPage).toBe(20);
  });
});

