import {TranslocoService} from "@ngneat/transloco";
import {BiitSnackbarService, NotificationType} from "wyzardry-theme/info";
import {HttpErrorResponse} from "@angular/common/http";

export class ErrorHandler {
  public static notify(error: HttpErrorResponse, translocoService: TranslocoService, snackbarService: BiitSnackbarService, message?:string): void {
    if (message) {
      snackbarService.showNotification(message, NotificationType.ERROR, null);
      return;
    }
    if (error?.error?.code) {
      translocoService.selectTranslate(error.error.code, {}, {scope:'wyzardry-theme/utils'}).subscribe(msg => {
        snackbarService.showNotification(msg, NotificationType.ERROR, undefined);
      });
      return;
    }

    if (error?.status) {
      translocoService.selectTranslate('' + error.status, {}, {scope:'wyzardry-theme/utils'}).subscribe(msg => {
        snackbarService.showNotification(msg, NotificationType.ERROR, undefined);
      });
      return;
    }

    translocoService.selectTranslate('request_unsuccessful', {}, {scope:'wyzardry-theme/utils'}).subscribe(msg => {
      snackbarService.showNotification(msg, NotificationType.ERROR, null);
    });
  }
}
