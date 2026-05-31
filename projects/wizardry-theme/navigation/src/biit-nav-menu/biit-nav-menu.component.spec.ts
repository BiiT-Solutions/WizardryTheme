import {BiitNavMenuComponent} from './biit-nav-menu.component';
import {ElementRef} from '@angular/core';

describe('BiitNavMenuComponent', () => {
  it('should create', () => {
    const routerStub = {};
    const contextMenuServiceStub = {show: () => undefined};

    const component = new BiitNavMenuComponent(routerStub as any, contextMenuServiceStub as any);

    expect(component).toBeTruthy();
  });

  it('initializes with empty routes array', () => {
    const routerStub = {};
    const contextMenuServiceStub = {show: () => undefined};
    const component = new BiitNavMenuComponent(routerStub as any, contextMenuServiceStub as any);

    expect(component.routes).toEqual([]);
  });

  it('initializes with no overflow visible', () => {
    const routerStub = {};
    const contextMenuServiceStub = {show: () => undefined};
    const component = new BiitNavMenuComponent(routerStub as any, contextMenuServiceStub as any);

    expect((component as any).hasOverflow).toBeFalse();
    expect((component as any).showLeft).toBeFalse();
    expect((component as any).showRight).toBeFalse();
  });
});

