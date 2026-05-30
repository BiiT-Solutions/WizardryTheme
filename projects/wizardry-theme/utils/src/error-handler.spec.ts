import {of} from 'rxjs';
import {ErrorHandler} from './error-handler';
import {NotificationType} from '@biit-solutions/wizardry-theme/info';

describe('ErrorHandler', () => {
  it('uses explicit message when provided', () => {
    const transloco = {selectTranslate: jasmine.createSpy('selectTranslate')};
    const snackbar = {showNotification: jasmine.createSpy('showNotification')};

    ErrorHandler.notify({} as any, transloco as any, snackbar as any, 'Custom message');

    expect(transloco.selectTranslate).not.toHaveBeenCalled();
    expect(snackbar.showNotification).toHaveBeenCalledWith('Custom message', NotificationType.ERROR, null);
  });

  it('translates backend error code and notifies', () => {
    const transloco = {selectTranslate: jasmine.createSpy('selectTranslate').and.returnValue(of('Translated code'))};
    const snackbar = {showNotification: jasmine.createSpy('showNotification')};

    ErrorHandler.notify({error: {code: 'my_code'}} as any, transloco as any, snackbar as any);

    expect(transloco.selectTranslate).toHaveBeenCalledWith('my_code', {}, {scope: 'wizardry-theme/utils'});
    expect(snackbar.showNotification).toHaveBeenCalledWith('Translated code', NotificationType.ERROR, undefined);
  });

  it('falls back to status code and generic key', () => {
    const transloco = {selectTranslate: jasmine.createSpy('selectTranslate').and.returnValues(of('404 msg'), of('fallback msg'))};
    const snackbar = {showNotification: jasmine.createSpy('showNotification')};

    ErrorHandler.notify({status: 404} as any, transloco as any, snackbar as any);
    ErrorHandler.notify({} as any, transloco as any, snackbar as any);

    expect(transloco.selectTranslate).toHaveBeenCalledWith('404', {}, {scope: 'wizardry-theme/utils'});
    expect(transloco.selectTranslate).toHaveBeenCalledWith('request_unsuccessful', {}, {scope: 'wizardry-theme/utils'});
    expect(snackbar.showNotification).toHaveBeenCalledWith('404 msg', NotificationType.ERROR, undefined);
    expect(snackbar.showNotification).toHaveBeenCalledWith('fallback msg', NotificationType.ERROR, null);
  });
});

