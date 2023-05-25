import {Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {Notification} from '../models/notification';

@Component({
  selector: 'biit-notification',
  templateUrl: 'biit-notification.component.html',
  styleUrls: ['biit-notification.component.scss']
})

export class BiitNotificationComponent implements OnDestroy {
  @Input() notification: Notification;
  @ViewChild('action') button;

  // TODO: Not working yet
  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   clearTimeout(this.notification.timeout);
  // }
  //
  // TODO: Not working yet
  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.notification.timeout.refresh();
  // }

  emitClick() {
    this.notification.onAction$.next();
  }

  ngOnDestroy(): void {
    this.notification.onAction$.complete();
  }
}
