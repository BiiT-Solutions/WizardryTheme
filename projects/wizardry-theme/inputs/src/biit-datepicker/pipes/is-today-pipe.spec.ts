import {IsTodayPipe} from './is-today-pipe';

describe('IsTodayPipe', () => {
  it('returns true for current day', () => {
    const pipe = new IsTodayPipe();

    expect(pipe.transform(new Date())).toBeTrue();
  });

  it('returns false for another day', () => {
    const pipe = new IsTodayPipe();
    const otherDay = new Date();
    otherDay.setDate(otherDay.getDate() - 1);

    expect(pipe.transform(otherDay)).toBeFalse();
  });
});

