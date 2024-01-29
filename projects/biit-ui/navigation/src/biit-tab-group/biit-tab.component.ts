import {Component, Input} from '@angular/core';

@Component({
  selector: 'biit-tab',
  template: '<div [hidden]="!active"><ng-content></ng-content></div>',
  styleUrls: []
})

export class BiitTabComponent {
  @Input() name: string;
  @Input() active = false;
  @Input() error = false;
}
