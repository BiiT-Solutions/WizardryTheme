import {TimelineViewerChartComponent} from './timeline-viewer-chart.component';

describe('TimelineViewerChartComponent', () => {
  it('should create', () => {
    const datePipeStub = {transform: () => '2026-01-01'};

    const component = new TimelineViewerChartComponent(datePipeStub as any);

    expect(component).toBeTruthy();
  });
});

