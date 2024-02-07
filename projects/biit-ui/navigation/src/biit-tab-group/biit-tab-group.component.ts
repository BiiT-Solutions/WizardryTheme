import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import {BiitTabComponent} from './biit-tab.component';

@Component({
  selector: 'biit-tab-group',
  templateUrl: 'biit-tab-group.component.html',
  styleUrls: ['biit-tab-group.component.scss']
})

export class BiitTabGroupComponent implements AfterViewInit {
  @ContentChildren(BiitTabComponent) tabs: QueryList<BiitTabComponent>
  @ViewChild('tabHeader') header: ElementRef;
  @Output() onTabClick: EventEmitter<BiitTabComponent> = new EventEmitter<BiitTabComponent>();
  protected compactMode = false;

  ngAfterViewInit() {
    let activeTabs = this.tabs.filter(tab => tab.active);
    if(!activeTabs.length) {
      this.activateTab(this.tabs.first);
    }
    this.checkHeaders();
  }

  activateTab(tab: BiitTabComponent){
    this.tabs.toArray().forEach(item => item.active = false);
    tab.active = true;
    this.onTabClick.emit(tab);
  }

  getActiveTab(): BiitTabComponent {
    return this.tabs.find(item => item.active);
  }

  checkHeaders(): void {
    this.header.nativeElement.querySelectorAll('.tab-selector').forEach(i => {
      if (i.firstChild.offsetHeight > parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.2) {
        this.compactMode = true;
        return;
      }
    });
  }
}
