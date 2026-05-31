import {IsSameDayPipe} from './is-same-day-pipe';

describe('IsSameDayPipe', () => {
  it('returns true when two dates share the same day', () => {
    const pipe = new IsSameDayPipe();

    const result = pipe.transform(new Date(2026, 4, 30, 9, 0), new Date(2026, 4, 30, 21, 0));

    expect(result).toBeTrue();
  });

  it('returns false for different dates', () => {
    const pipe = new IsSameDayPipe();

    const result = pipe.transform(new Date(2026, 4, 30), new Date(2026, 5, 1));

    expect(result).toBeFalse();
  });
});

