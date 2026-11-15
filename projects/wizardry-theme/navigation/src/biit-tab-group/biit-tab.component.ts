import {Component, Input, signal} from '@angular/core';

@Component({
    selector: 'biit-tab',
    template: '<div [hidden]="!active" [class.inner-content]="active"><ng-content></ng-content></div>',
    styleUrls: ['biit-tab.component.scss'],
    standalone: false
})

export class BiitTabComponent {
  @Input() name: string;
  @Input() error = false;

  private readonly activeState = signal(false);

  /**
   * Whether this tab is the visible one.
   * <p>
   * Backed by a signal so that switching tabs from {@link BiitTabGroupComponent}
   * notifies Angular's change detection. Since Angular 22 only views marked as
   * dirty are refreshed, a plain field would leave the tab content hidden.
   * </p>
   */
  @Input()
  get active(): boolean {
    return this.activeState();
  }

  set active(value: boolean) {
    this.activeState.set(value);
  }
}
