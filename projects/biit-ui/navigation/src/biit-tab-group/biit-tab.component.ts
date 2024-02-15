import {Component, Input} from '@angular/core';

@Component({
  selector: 'biit-tab',
  template: '<div [hidden]="!active" style="display: contents; min-height: 100%"><ng-content></ng-content></div>',
  styleUrls: []
})

export class BiitTabComponent {
  @Input() name: string;
  @Input() active = false;
  @Input() error = false;
}
