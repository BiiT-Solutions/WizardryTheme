import {ElementRef, QueryList} from '@angular/core';
import {Route, Router} from '@angular/router';
import {ContextMenuService} from '@perfectmemory/ngx-contextmenu';
import {BiitNavMenuComponent} from './biit-nav-menu/biit-nav-menu.component';
import {BiitNavUserComponent} from './biit-nav-user/biit-nav-user.component';
import {BiitTabComponent} from './biit-tab-group/biit-tab.component';
import {BiitTabGroupComponent} from './biit-tab-group/biit-tab-group.component';
class ContextMenuServiceStub {
  show = jasmine.createSpy('show');
}
describe('Navigation basic family', () => {
  it('coerces left alignment in nav user', () => {
    const component = new BiitNavUserComponent();
    component.leftAlign = undefined as any;
    component.ngOnInit();
    expect(component.leftAlign).toBeFalse();
    component.leftAlign = true as any;
    component.ngOnInit();
    expect(component.leftAlign).toBeTrue();
  });
  it('activates tabs and emits tab clicks', () => {
    const component = new BiitTabGroupComponent();
    const firstTab = new BiitTabComponent();
    const secondTab = new BiitTabComponent();
    const tabs = new QueryList<BiitTabComponent>();
    (tabs as any).reset([firstTab, secondTab]);
    (tabs as any).notifyOnChanges();
    const clicked: BiitTabComponent[] = [];
    const headerNative = {
      querySelectorAll: () => [{firstChild: {offsetHeight: 10}}, {firstChild: {offsetHeight: 10}}],
    };
    component.tabs = tabs;
    component.header = new ElementRef(headerNative);
    component.onTabClick.subscribe(tab => clicked.push(tab));
    component.ngAfterViewInit();
    expect(firstTab.active).toBeTrue();
    expect(component.getActiveTab()).toBe(firstTab);
    component.activateTab(secondTab);
    expect(firstTab.active).toBeFalse();
    expect(secondTab.active).toBeTrue();
    expect(clicked).toEqual([firstTab, secondTab]);
  });
  it('switches to compact mode when headers wrap', () => {
    const component = new BiitTabGroupComponent();
    component.header = new ElementRef({
      querySelectorAll: () => [{firstChild: {offsetHeight: 100}}],
    });
    component.checkHeaders();
    expect((component as any).compactMode).toBeTrue();
  });
  it('updates nav menu arrows and opens the context menu with child routes', () => {
    const contextMenuService = new ContextMenuServiceStub();
    const component = new BiitNavMenuComponent({} as Router, contextMenuService as unknown as ContextMenuService<Route>);
    const scrollBy = jasmine.createSpy('scrollBy');
    const nativeElement = {
      scrollWidth: 500,
      clientWidth: 100,
      scrollLeft: 50,
      scrollBy,
    };
    component.menuCanvas = new ElementRef(nativeElement as any);
    (component as any).updateArrows();
    expect(component.hasOverflow).toBeTrue();
    expect(component.showLeft).toBeTrue();
    expect(component.showRight).toBeTrue();
    component.scrollLeft();
    component.scrollRight();
    expect(scrollBy).toHaveBeenCalledTimes(2);
    jasmine.clock().install();
    try {
      const route: Route = {
        path: 'parent',
        children: [
          {path: 'child', title: 'Child', data: {disabled: false, hidden: false}},
        ],
      };
      const navItem = {
        getBoundingClientRect: () => ({left: 10, bottom: 20} as DOMRect),
      } as HTMLDivElement;
      component.contextMenu = {} as any;
      component.onContextMenu(route, navItem);
      jasmine.clock().tick(60);
      expect(component.contextMenuItems).toEqual([
        jasmine.objectContaining({title: 'Child', path: 'child', parent: 'parent'}),
      ]);
      expect(contextMenuService.show).toHaveBeenCalled();
    } finally {
      jasmine.clock().uninstall();
    }
  });
});
