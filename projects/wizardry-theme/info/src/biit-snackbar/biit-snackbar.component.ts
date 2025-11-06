import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {BiitSnackbarService} from './biit-snackbar.service';
import {Notification} from './models/notification';

@Component({
  selector: 'biit-snackbar',
  templateUrl: 'biit-snackbar.component.html',
  styleUrls: ['biit-snackbar.component.scss'],
  animations: [
    trigger('notificationList', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('500ms ease-in-out', style({ height: '*' })),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, height: '*' }),
        animate('500ms ease-in-out', style({ opacity: 0 })),
        animate('500ms ease-in-out', style({ height: 0 }))
      ])
    ])
  ]
})

export class BiitSnackbarComponent implements OnInit {
  protected notifications: Notification[] = [];

  constructor(protected snackbarService: BiitSnackbarService) {
  }

  ngOnInit() {
    this.snackbarService.getNotifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }
}
