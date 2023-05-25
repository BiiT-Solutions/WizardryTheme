import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitButtonModule} from 'biit-ui/button';
import {FormsModule} from '@angular/forms';
import {APP_INITIALIZER} from '@angular/core';
import {BiitInputTextModule} from 'biit-ui/inputs';
import {CommonModule} from '@angular/common';
import {completeIconSet} from 'biit-icons-collection';
import {BiitIconService} from 'biit-ui/icon';
import {
  BiitSnackbarComponent,
  BiitSnackbarHorizontalPosition, BiitSnackbarModule,
  BiitSnackbarService,
  BiitSnackbarVerticalPosition,
  NotificationType
} from 'biit-ui/info';

let biitSnackbarService: BiitSnackbarService;

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

function biitSnackbarServiceFactory(service: BiitSnackbarService) {
  biitSnackbarService = service;
  return () => service;
}

function addToast(msg: string, type: NotificationType, action: string, timeoutSeconds: number) {
  if (biitSnackbarService) {
    biitSnackbarService.showNotification(msg, type, action, timeoutSeconds);
  }
}

function setVertical(value: BiitSnackbarVerticalPosition) {
  if (biitSnackbarService && value) {
    biitSnackbarService.setVerticalPosition(value);
  }
}

function setHorizontal(value: BiitSnackbarHorizontalPosition) {
  if (biitSnackbarService && value) {
    biitSnackbarService.setHorizontalPosition(value);
  }
}

export default {
  title: 'Basic/Info/Snackbar',
  decorators: [
    moduleMetadata({
      imports: [BiitSnackbarModule, BiitButtonModule, BiitInputTextModule, FormsModule, CommonModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: biitSnackbarServiceFactory,
          multi: true,
          deps: [BiitSnackbarService],
        },
        {
          provide: APP_INITIALIZER,
          useFactory: biitIconServiceFactory,
          multi:true,
          deps: [BiitIconService],
        }
        ]
    })
  ],
  args: {
    notificationData: [NotificationType.INFO, NotificationType.SUCCESS, NotificationType.ERROR, NotificationType.WARNING],
    verticalData: [BiitSnackbarVerticalPosition.TOP, BiitSnackbarVerticalPosition.BOTTOM],
    horizontalData: [BiitSnackbarHorizontalPosition.LEFT, BiitSnackbarHorizontalPosition.CENTER, BiitSnackbarHorizontalPosition.RIGHT],
    verticalPos: BiitSnackbarVerticalPosition.TOP,
    horizontalPos: BiitSnackbarHorizontalPosition.CENTER,
    notificationType: NotificationType.INFO,
    notificationText: 'This is a test notification',
    actionText: 'Dismiss',
    timeoutSeconds: 5
  }
} as Meta;

const Template: Story<BiitSnackbarComponent> = (args: BiitSnackbarComponent) => ({
  props: {
    ...args,
    addToast: (msg: string, type: NotificationType, action: string, timeoutSeconds: number) => addToast(msg, type, action, timeoutSeconds),
    setVertical: (value: BiitSnackbarVerticalPosition) => setVertical(value),
    setHorizontal: (value: BiitSnackbarHorizontalPosition) => setHorizontal(value),
  },
  template: `
    <biit-snackbar></biit-snackbar>
    <biit-button (click)="addToast(notificationText, notificationType, actionText, timeoutSeconds)">Create Notification</biit-button>
    <br/>
    <a style="margin-top: 1rem; display: inline-block; margin-right: 0.5rem;">Vertical position: </a>
    <select [(ngModel)]="verticalPos" (ngModelChange)="setVertical($event)" style="font-size: 1rem;">
      <option *ngFor="let obj of verticalData" [ngValue]="obj">{{obj}}</option>
    </select>
    <br/>
    <a style="margin-top: 1rem; display: inline-block; margin-right: 0.5rem;">Horizontal position: </a>
    <select [(ngModel)]="horizontalPos" (ngModelChange)="setHorizontal($event)" style="font-size: 1rem;">
      <option *ngFor="let obj of horizontalData" [ngValue]="obj">{{obj}}</option>
    </select>
    <br/>
    <a style="margin-top: 1rem; display: inline-block; margin-right: 0.5rem;">Notification type: </a>
    <select [(ngModel)]="notificationType" style="font-size: 1rem;">
      <option *ngFor="let obj of notificationData" [ngValue]="obj">{{obj}}</option>
    </select>
    <br/>
    <biit-input-text [(ngModel)]="notificationText" placeholder="Notification Text" style="width: 20rem; display: block; margin-top: 1rem"></biit-input-text>
    <biit-input-text [(ngModel)]="actionText" placeholder="Action Text" style="width: 12rem; display: block"></biit-input-text>
    <biit-input-text [(ngModel)]="timeoutSeconds" placeholder="Timeout (seconds)" style="width: 12rem; display: block"></biit-input-text>
`});

export const Default = Template.bind({});
