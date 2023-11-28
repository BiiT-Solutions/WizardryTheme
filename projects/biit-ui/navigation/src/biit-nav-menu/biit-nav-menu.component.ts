import {Component, Input} from '@angular/core';
import {Route} from '@angular/router';

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

  onMouseMove(route: Route) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      if (!this.submenuHover) {
        this.hovered = route;
      }
    }, 200);
  }

  log(event) {
    console.log("DEVELOPMENT LOG: ", event)
  }
}
