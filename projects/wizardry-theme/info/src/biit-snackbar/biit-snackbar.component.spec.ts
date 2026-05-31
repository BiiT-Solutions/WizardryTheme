import {BiitSnackbarComponent} from './biit-snackbar.component';

describe('BiitSnackbarComponent', () => {
  it('should create', () => {
    const snackbarServiceStub = {onNotificationReceived: {subscribe: () => ({unsubscribe: () => undefined})}};

    const component = new BiitSnackbarComponent(snackbarServiceStub as any);

    expect(component).toBeTruthy();
  });
});

