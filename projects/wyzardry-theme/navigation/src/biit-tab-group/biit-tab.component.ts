import {Component, Input} from '@angular/core';

@Component({
  selector: 'biit-tab',
  template: '<div [hidden]="!active" [class.inner-content]="active"><ng-content></ng-content></div>',
  styleUrls: ['biit-tab.component.scss']
})

export class BiitTabComponent {
  @Input() name: string;
  @Input() active = false;
  @Input() error = false;
}
