import {BiitCalendarComponent} from './biit-calendar.component';
import {EventColor} from '../utils/event-color';

describe('BiitCalendarComponent', () => {
  function createComponent() {
    const translocoStub = {getActiveLang: () => 'en'};
    const cdrStub = {detectChanges: () => undefined};
    const elementRefStub = {nativeElement: {querySelector: () => ({scrollTop: 0})}};
    return new BiitCalendarComponent(translocoStub as any, cdrStub as any, elementRefStub as any);
  }

  it('initializes with default calendar mode month', () => {
    const component = createComponent();

    expect((component as any).calendarMode).toBe('MONTH');
  });

  it('initializes with today as view date', () => {
    const component = createComponent();

    const today = new Date();
    const viewDate = (component as any).viewDate;
    expect(viewDate.toDateString()).toBe(today.toDateString());
  });

  it('generates event styles from EventColor', () => {
    const component = createComponent();
    const color = EventColor.RED;

    const styles = component.eventStyles(color);

    expect(styles['--event-primary']).toBe(EventColor.RED.primary);
    expect(styles['--event-secondary']).toBe(EventColor.RED.secondary);
  });
});

