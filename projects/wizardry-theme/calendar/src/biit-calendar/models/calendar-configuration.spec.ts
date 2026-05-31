import {CalendarConfiguration} from './calendar-configuration';

describe('CalendarConfiguration', () => {
  it('uses false defaults when no arguments are provided', () => {
    const config = new CalendarConfiguration();

    expect(config.createOnDrag).toBeFalse();
    expect(config.barred).toBeFalse();
  });

  it('assigns constructor values', () => {
    const config = new CalendarConfiguration(true, true);

    expect(config.createOnDrag).toBeTrue();
    expect(config.barred).toBeTrue();
  });
});

