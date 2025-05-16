import {EventAction} from "calendar-utils";
import {EventColor} from "../../utils/event-color"

export class CalendarEvent<MetaType = any> {
  id?: string | number;
  start: Date;
  end: Date;
  title: string;
  color?: EventColor;
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  meta?: MetaType;
  readonly ?: boolean;

  constructor(id: string | number, title: string, startDate: Date, endDate: Date, readonly?: boolean, allDay?: boolean, color?: EventColor, actions?: EventAction[], resizable?: boolean, draggable?: boolean, meta?: MetaType) {
    this.id = id;
    this.title = title;
    this.start = startDate ? new Date(startDate) : undefined;
    this.end = endDate ? new Date(endDate) : undefined;
    this.allDay = allDay ? allDay : false;
    this.color = color ? color : EventColor.RED;
    this.actions = actions ? actions : [];
    if (resizable && !readonly) {
      this.resizable = {beforeStart: true, afterEnd: true}
    }
    this.draggable = draggable ? draggable : !readonly;
    this.meta = meta;
    this.readonly = readonly;
  }

  public static copy(original: CalendarEvent, target: CalendarEvent): CalendarEvent {
    target.id = original.id;
    target.start = new Date(original.start);
    target.end = new Date(original.end);
    target.title = original.title;
    target.color = original.color;
    target.actions = original.actions;
    target.allDay = original.allDay;
    target.cssClass = original.cssClass;
    target.resizable = original.resizable;
    target.draggable = original.draggable;
    target.meta = original.meta;
    target.readonly = original.readonly;

    return target;
  }

  public static clone(original: CalendarEvent): CalendarEvent {
    const event = new CalendarEvent(undefined, '', new Date(), new Date())
    return CalendarEvent.copy(original, event);
  }
}
