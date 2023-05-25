import {Injectable} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {Notification} from './models/notification';
import {NotificationType} from './models/notification-type';
import {BiitSnackbarVerticalPosition} from './models/biit-snackbar-vertical-position';
import {BiitSnackbarHorizontalPosition} from './models/biit-snackbar-horizontal-position';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BiitSnackbarService {
  private notifications: Notification[] = [];

  private _getNotifications$: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>(this.notifications);
  public getNotifications$: Observable<Notification[]> = this._getNotifications$.asObservable();

  public verticalPosition: BiitSnackbarVerticalPosition = BiitSnackbarVerticalPosition.TOP;
  public horizontalPosition: BiitSnackbarHorizontalPosition = BiitSnackbarHorizontalPosition.CENTER;

  constructor() { }

  showNotification(message: string, type?: NotificationType, actionText?: string, duration?: number): Notification {
    let notification = new Notification(message, type, actionText);

    if (duration) {
      notification.timeout = setTimeout(() => {
        this.closeNotification(notification.id);
      }, duration*1000);
    }

    notification.onAction$.subscribe(() => {
      this.closeNotification(notification.id);
    });

    this.notifications.unshift(notification);
    this._getNotifications$.next(this.notifications);
    return notification;
  }

  closeNotification(id: uuid): void {
    const index = this.notifications.findIndex(n => n.id == id);
    this.notifications.splice(index, 1);
    this._getNotifications$.next(this.notifications);
  }

  setPosition(vertical: BiitSnackbarVerticalPosition, horizontal: BiitSnackbarHorizontalPosition) {
    this.verticalPosition = vertical;
    this.horizontalPosition = horizontal;
  }

  setVerticalPosition(position: BiitSnackbarVerticalPosition) {
    this.verticalPosition = position;
  }

  setHorizontalPosition(position: BiitSnackbarHorizontalPosition) {
    this.horizontalPosition = position;
  }
}
