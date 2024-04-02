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

  constructor(id: string | number, title: string, startDate: Date, endDate: Date, allDay?: boolean, color?: EventColor, actions?: EventAction[], resizable?: boolean, draggable?: boolean, meta?: MetaType) {
    this.id = id;
    this.title = title;
    this.start = new Date(startDate);
    this.end = new Date(endDate);
    this.allDay = allDay ? allDay : false;
    this.color = color ? color : EventColor.Red;
    this.actions = actions ? actions : [];
    if (resizable) {
      this.resizable = {beforeStart: true, afterEnd: true}
    }
    this.draggable = draggable ? draggable : true;
    this.meta = meta;
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

    return target;
  }

  public static clone(original: CalendarEvent): CalendarEvent {
    const event = new CalendarEvent(undefined, '', new Date(), new Date())
    return CalendarEvent.copy(original, event);
  }
}
