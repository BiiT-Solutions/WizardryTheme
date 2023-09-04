import {Component, Input} from '@angular/core';
import {Route} from '@angular/router';

@Component({
  selector: 'biit-nav-menu',
  templateUrl: 'biit-nav-menu.component.html',
  styleUrls: ['biit-nav-menu.component.scss']
})

export class BiitNavMenuComponent {
  @Input() routes: Route[] = [];

  log(event) {
    console.log("DEVELOPMENT LOG: ", event)
  }
}
