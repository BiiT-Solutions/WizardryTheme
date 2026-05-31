import {IsDisabledPipe} from './is-disabled-pipe';

describe('IsDisabledPipe', () => {
  it('returns true when date is below min range', () => {
    const pipe = new IsDisabledPipe();
    const date = new Date(2026, 4, 10);
    const min = new Date(2026, 4, 12);

    const result = pipe.transform(date, [], false, false, min, null as any);

    expect(result).toBeTrue();
  });

  it('returns true when date is disabled explicitly', () => {
    const pipe = new IsDisabledPipe();
    const date = new Date(2026, 4, 15);

    const result = pipe.transform(date, [new Date(2026, 4, 15)], false, false, null as any, null as any);

    expect(result).toBeTrue();
  });
});

