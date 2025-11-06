import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitSnackbarComponent} from './biit-snackbar.component';
import {BiitNotificationComponent} from './biit-notification/biit-notification.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';
import {BiitButtonModule} from '@biit-solutions/wizardry-theme/button';

@NgModule({
  declarations: [
    BiitSnackbarComponent,
    BiitNotificationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BiitIconModule,
    BiitButtonModule
  ],
  exports: [
    BiitSnackbarComponent,
    BiitNotificationComponent
  ]
})

export class BiitSnackbarModule { }
