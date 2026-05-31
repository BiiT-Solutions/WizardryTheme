import {BiitDatePickerComponent} from './biit-datepicker.component';

describe('BiitDatePickerComponent', () => {
  function createComponent() {
    const elementRefStub = {nativeElement: {querySelector: () => null, contains: () => false}};
    const translocoStub = {getActiveLang: () => 'en'};
    return new BiitDatePickerComponent(elementRefStub as any, translocoStub as any);
  }

  it('coerces boolean inputs on init', () => {
    const component = createComponent();
    (component as any).disabled = 'true' as any;
    (component as any).readonly = 'yes' as any;
    (component as any).required = undefined;

    component.ngOnInit();

    expect((component as any).disabled).toBeTrue();
    expect((component as any).readonly).toBeTrue();
    expect((component as any).required).toBeFalse();
  });

  it('draws calendar grid on init', () => {
    const component = createComponent();
    component.ngOnInit();
    const days = (component as any).days;

    expect(Array.isArray(days)).toBeTrue();
    expect(days.length).toBeGreaterThan(0);
  });

  it('sets to today when requested', () => {
    const component = createComponent();
    component.ngOnInit();
    const onChange = jasmine.createSpy('onChange');
    component.registerOnChange(onChange);

    component.setToday();

    expect(onChange).toHaveBeenCalled();
    expect((component as any).viewerDate).toBeDefined();
  });
});

