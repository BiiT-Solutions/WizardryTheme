import {OutOfMonthPipe} from './out-of-month-pipe';

describe('OutOfMonthPipe', () => {
  it('returns true when date is outside viewer month', () => {
    const pipe = new OutOfMonthPipe();

    const result = pipe.transform(new Date(2026, 5, 1), new Date(2026, 4, 31));

    expect(result).toBeTrue();
  });

  it('returns false when date is in the same viewer month', () => {
    const pipe = new OutOfMonthPipe();

    const result = pipe.transform(new Date(2026, 4, 1), new Date(2026, 4, 30));

    expect(result).toBeFalse();
  });
});

