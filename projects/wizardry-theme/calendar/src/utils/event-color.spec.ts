import {EventColor} from './event-color';

describe('EventColor', () => {
  it('keeps non-barred palettes with barred=false', () => {
    expect(EventColor.RED.barred).toBeFalse();
    expect(EventColor.GREEN.barred).toBeFalse();
    expect(EventColor.YELLOW.barred).toBeFalse();
    expect(EventColor.BLUE.barred).toBeFalse();
    expect(EventColor.PURPLE.barred).toBeFalse();
    expect(EventColor.GREY.barred).toBeFalse();
  });

  it('marks barred palettes with barred=true', () => {
    expect(EventColor.BARRED_BLUE.barred).toBeTrue();
    expect(EventColor.BARRED_GREY.barred).toBeTrue();
    expect(EventColor.BARRED_YELLOW.barred).toBeTrue();
  });

  it('uses white secondary for empty palettes', () => {
    expect(EventColor.EMPTY_RED.secondary).toBe('#FFFFFF');
    expect(EventColor.EMPTY_GREEN.secondary).toBe('#FFFFFF');
    expect(EventColor.EMPTY_YELLOW.secondary).toBe('#FFFFFF');
    expect(EventColor.EMPTY_BLUE.secondary).toBe('#FFFFFF');
    expect(EventColor.EMPTY_PURPLE.secondary).toBe('#FFFFFF');
  });
});

