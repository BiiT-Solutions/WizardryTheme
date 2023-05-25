import {NotificationType} from './notification-type';
import {v4 as uuid} from 'uuid';
import {Subject} from 'rxjs';

export class Notification {
  id: uuid;
  message: string = '';
  type: NotificationType = NotificationType.INFO;
  timeout: NodeJS.Timeout;
  actionLabel: string;
  onAction$: Subject<void> = new Subject<void>();

  constructor(message?: string, type?: NotificationType, actionLabel?: string, timeout?: NodeJS.Timeout) {
    this.id = uuid();
    if (message) {
      this.message = message;
    }
    if (type) {
      this.type = type;
    }
    if (actionLabel) {
      this.actionLabel = actionLabel;
    }
    if (timeout) {
      this.timeout = timeout;
    }
    if (!timeout && !actionLabel) {
      this.actionLabel = 'Dismiss';
    }
  }
}
