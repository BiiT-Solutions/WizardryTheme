import {BiitNavMenuComponent} from './biit-nav-menu.component';

describe('BiitNavMenuComponent', () => {
  it('should create', () => {
    const routerStub = {};
    const contextMenuServiceStub = {show: () => undefined};

    const component = new BiitNavMenuComponent(routerStub as any, contextMenuServiceStub as any);

    expect(component).toBeTruthy();
  });
});

