import {CalendarEvent} from './calendar-event';
import {EventColor} from '../../utils/event-color';

describe('CalendarEvent', () => {
  it('applies defaults in constructor', () => {
    const event = new CalendarEvent(1, 'Meeting', new Date('2026-05-01'), new Date('2026-05-01'));

    expect(event.color).toEqual(EventColor.RED);
    expect(event.actions).toEqual([]);
    expect(event.allDay).toBeFalse();
    expect(event.draggable).toBeTrue();
  });

  it('creates resize handles when resizable and not readonly', () => {
    const event = new CalendarEvent(1, 'Resizable', new Date('2026-05-01'), new Date('2026-05-01'), false, false, undefined, undefined, true);

    expect(event.resizable).toEqual({beforeStart: true, afterEnd: true});
  });

  it('copies and clones preserving data values', () => {
    const original = new CalendarEvent(10, 'Original', new Date('2026-05-10'), new Date('2026-05-11'), false, true, EventColor.BLUE, [], true, false, {owner: 'Pam'});

    const copied = CalendarEvent.copy(original, new CalendarEvent(undefined as any, '', new Date(), new Date()));
    const cloned = CalendarEvent.clone(original);

    expect(copied.id).toBe(10);
    expect(copied.title).toBe('Original');
    expect(copied.meta).toEqual({owner: 'Pam'});
    expect(cloned.id).toBe(10);
    expect(cloned.title).toBe('Original');
    expect(cloned.meta).toEqual({owner: 'Pam'});
    expect(cloned.start).not.toBe(original.start);
    expect(cloned.end).not.toBe(original.end);
  });
});

