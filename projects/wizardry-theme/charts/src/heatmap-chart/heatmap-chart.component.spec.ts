import {HeatmapChartComponent} from './heatmap-chart.component';

describe('HeatmapChartComponent', () => {
  it('should create and register icons', () => {
    const iconService = {registerIcons: jasmine.createSpy('registerIcons')};

    const component = new HeatmapChartComponent(iconService as any);

    expect(component).toBeTruthy();
    expect(iconService.registerIcons).toHaveBeenCalled();
  });
});

