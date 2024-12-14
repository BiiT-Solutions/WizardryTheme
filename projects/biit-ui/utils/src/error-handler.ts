import {TranslocoService} from "@ngneat/transloco";
import {BiitSnackbarService, NotificationType} from "biit-ui/info";
import {HttpErrorResponse} from "@angular/common/http";

export class ErrorHandler {
  public static notify(error: HttpErrorResponse, translocoService: TranslocoService, snackbarService: BiitSnackbarService) {
    if (error?.error?.code) {
      translocoService.selectTranslate(error.error.code, {}, {scope:'biit-ui/utils'}).subscribe(msg => {
        snackbarService.showNotification(msg, NotificationType.ERROR, undefined, 10);
      });
      return;
    }
    translocoService.selectTranslate('request_unsuccessful', {}, {scope:'biit-ui/utils'}).subscribe(msg => {
      snackbarService.showNotification(msg, NotificationType.ERROR, null, 5);
    });
  }
}
