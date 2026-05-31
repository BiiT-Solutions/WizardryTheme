import {CalendarDatePipe} from './calendar-date-pipe';

describe('CalendarDatePipe', () => {
  it('extracts day number from date', () => {
    const pipe = new CalendarDatePipe();

    expect(pipe.transform(new Date(2026, 4, 30))).toBe(30);
  });

  it('works across month boundaries', () => {
    const pipe = new CalendarDatePipe();

    expect(pipe.transform(new Date(2026, 5, 1))).toBe(1);
  });
});

