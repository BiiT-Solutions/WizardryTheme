import {CalendarEvent} from "./calendar-event";

export class CalendarEventClickEvent {
  event: CalendarEvent;
  sourceEvent: MouseEvent | KeyboardEvent;

  constructor(event: CalendarEvent, sourceEvent: MouseEvent | KeyboardEvent) {
    this.event = event;
    this.sourceEvent = sourceEvent;
  }
}
