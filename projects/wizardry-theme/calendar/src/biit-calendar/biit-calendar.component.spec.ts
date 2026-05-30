import {BiitCalendarComponent} from './biit-calendar.component';

describe('BiitCalendarComponent', () => {
  it('should create', () => {
    const translocoStub = {getActiveLang: () => 'en'};
    const cdrStub = {detectChanges: () => undefined};
    const elementRefStub = {nativeElement: {querySelector: () => ({scrollTop: 0})}};

    const component = new BiitCalendarComponent(translocoStub as any, cdrStub as any, elementRefStub as any);

    expect(component).toBeTruthy();
  });
});

