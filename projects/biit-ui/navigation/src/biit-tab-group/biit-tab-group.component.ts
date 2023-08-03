import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {BiitTabComponent} from './biit-tab.component';

@Component({
  selector: 'biit-tab-group',
  templateUrl: 'biit-tab-group.component.html',
  styleUrls: ['biit-tab-group.component.scss']
})

export class BiitTabGroupComponent implements AfterContentInit {
  @ContentChildren(BiitTabComponent) tabs: QueryList<BiitTabComponent>

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter(tab => tab.active);
    if(!activeTabs.length) {
      this.activateTab(this.tabs.first);
    }
  }

  activateTab(tab: BiitTabComponent){
    this.tabs.toArray().forEach(item => item.active = false);
    tab.active = true;
  }
}
