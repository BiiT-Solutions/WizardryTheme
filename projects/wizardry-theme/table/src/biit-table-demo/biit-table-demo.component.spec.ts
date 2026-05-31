import {BiitTableDemoComponent} from './biit-table-demo.component';

describe('BiitTableDemoComponent', () => {
  it('should create', () => {
    const iconServiceStub = {registerIcons: () => undefined};

    const component = new BiitTableDemoComponent(iconServiceStub as any);

    expect(component).toBeTruthy();
  });
});

