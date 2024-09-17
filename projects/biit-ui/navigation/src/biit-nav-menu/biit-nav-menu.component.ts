import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Route, Router} from '@angular/router';
import {ContextMenuComponent, ContextMenuService} from "@perfectmemory/ngx-contextmenu";

@Component({
  selector: 'biit-nav-menu',
  templateUrl: 'biit-nav-menu.component.html',
  styleUrls: ['biit-nav-menu.component.scss']
})

export class BiitNavMenuComponent {
  @Input() routes: Route[] = [];
  protected hovered: Route;
  protected submenuHover = false;
  protected submenuItemHover;
  protected timeout;

  protected readonly clearTimeout = clearTimeout;

  @ViewChild('navbarMenu') contextMenu: ContextMenuComponent<Route>;
  @ViewChild('navbarMenu', {read: ElementRef}) navbarRef: ElementRef;
  contextMenuItems = [];

  constructor(protected router: Router,
              protected contextMenuService: ContextMenuService<Route>) {
  }

  onContextMenu(route: Route, navItem: HTMLDivElement) {
    this.hovered = route;
    this.contextMenuItems = route.children?.map(item => {
      return {
        title: item.title,
        disabled: item.data?.['disabled'],
        visible: !item.data?.['hidden'],
        path: item.path,
        parent: route.path
      }
    })
    this.timeout = setTimeout(() => {
        this.openMenu(navItem);
    }, 50);
  }

  protected openMenu(navItem: HTMLDivElement): void {
    this.contextMenuService.show(
      this.contextMenu,
      {
        x: navItem.offsetLeft,
        y: navItem.offsetHeight
      }
    );
  }

  log(event) {
    console.log("DEVELOPMENT LOG: ", event)
  }
}
