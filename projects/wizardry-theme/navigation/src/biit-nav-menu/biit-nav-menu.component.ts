import {AfterViewInit, Component, ViewEncapsulation, ElementRef, Input, ViewChild} from '@angular/core';
import {Route, Router} from '@angular/router';
import {ContextMenuComponent, ContextMenuService} from "@perfectmemory/ngx-contextmenu";
import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

@Component({
  selector: 'biit-nav-menu',
  templateUrl: 'biit-nav-menu.component.html',
  styleUrls: ['biit-nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  @ViewChild('menuCanvas', { static: true }) menuCanvas!: ElementRef<HTMLDivElement>;

  contextMenuItems = [];
  hasOverflow = false;
  showLeft = false;
  showRight = false;

  constructor(protected router: Router,
              protected contextMenuService: ContextMenuService<Route>) {
  }

  ngAfterViewInit(): void {
    this.updateArrows();
    fromEvent(this.menuCanvas.nativeElement, 'scroll')
      .pipe(auditTime(50))
      .subscribe(() => this.updateArrows());

    const ro = new ResizeObserver(() => this.updateArrows());
    ro.observe(this.menuCanvas.nativeElement);
  }

  private updateArrows(): void {
    const el = this.menuCanvas.nativeElement;
    this.hasOverflow = el.scrollWidth > el.clientWidth;
    this.showLeft = this.hasOverflow && el.scrollLeft > 0;
    this.showRight = this.hasOverflow && (el.scrollLeft + el.clientWidth < el.scrollWidth);
  }

  scrollLeft(): void {
    this.menuCanvas.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.menuCanvas.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
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
    const rect: DOMRect = navItem.getBoundingClientRect();
    let x: number = rect.left + window.scrollX;
    let y: number = rect.bottom + window.scrollY;

    // Optional: avoid clipping on the right edge
    const maxX: number = window.scrollX + window.innerWidth - 10;
    if (x > maxX) {
      x = maxX;
    }

    this.contextMenuService.show(this.contextMenu, { x, y });
  }

  log(event) {
    console.debug("DEVELOPMENT LOG: ", event)
  }
}
