import {BiitDatePickerComponent} from './biit-datepicker.component';

describe('BiitDatePickerComponent', () => {
  it('should create', () => {
    const elementRefStub = {nativeElement: {querySelector: () => null, contains: () => false}};
    const translocoStub = {getActiveLang: () => 'en'};

    const component = new BiitDatePickerComponent(elementRefStub as any, translocoStub as any);

    expect(component).toBeTruthy();
  });
});

