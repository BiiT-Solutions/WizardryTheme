import {BehaviorSubject} from 'rxjs';
import {BiitProgressBarComponent, BiitProgressBarType} from './biit-progress-bar/biit-progress-bar.component';
import {BiitNotificationComponent} from './biit-snackbar/biit-notification/biit-notification.component';
import {Notification} from './biit-snackbar/models/notification';
import {BiitSnackbarComponent} from './biit-snackbar/biit-snackbar.component';
import {BiitSnackbarService} from './biit-snackbar/biit-snackbar.service';
import {BiitTooltipComponent} from './biit-tooltip/biit-tooltip.component';
class SnackbarServiceStub {
  readonly subject = new BehaviorSubject<Notification[]>([]);
  readonly getNotifications$ = this.subject.asObservable();
}
describe('Info family', () => {
  it('updates progress bar value through the input setter', () => {
    const component = new BiitProgressBarComponent();
    component.value = 75;
    expect(component.type).toBe(BiitProgressBarType.INDETERMINATE);
    expect(component._value).toBe(75);
  });
  it('emits the notification action only when it is closable', () => {
    const component = new BiitNotificationComponent();
    const notification = new Notification('Message');
    let actionCount = 0;
    let completed = false;
    notification.onAction$.subscribe({
      next: () => actionCount++,
      complete: () => {
        completed = true;
      },
    });
    component.notification = notification;
    component.emitClick(false);
    expect(actionCount).toBe(0);
    component.emitClick(true);
    expect(actionCount).toBe(1);
    component.ngOnDestroy();
    expect(completed).toBeTrue();
  });
  it('syncs snackbar notifications from the service stream', () => {
    const service = new SnackbarServiceStub();
    const component = new BiitSnackbarComponent(service as unknown as BiitSnackbarService);
    const notifications = [new Notification('One'), new Notification('Two')];
    component.ngOnInit();
    service.subject.next(notifications);
    expect((component as any).notifications).toEqual(notifications);
  });
  it('starts tooltip component with empty positioning values', () => {
    const component = new BiitTooltipComponent();
    expect(component.text).toBe('');
    expect(component.top).toBe('');
    expect(component.left).toBe('');
  });
});
