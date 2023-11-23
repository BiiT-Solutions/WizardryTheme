import {EventAction} from "calendar-utils";
import {EventColor} from "../../utils/event-color"

export class CalendarEvent<MetaType = any> {
  id?: string | number;
  start: Date;
  end?: Date;
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

  constructor(title: string, start: Date, end?: Date, color?: EventColor, actions?: EventAction[], resizable?: boolean, draggable?: boolean, meta?: MetaType) {
    this.title = title;
    this.start = new Date(start);
    if (end) {
      this.end = new Date(end);
    } else {
      this.allDay = true;
    }
    this.color = color ? color : EventColor.Red;
    this.actions = actions;
    if (resizable) {
      this.resizable = {beforeStart: true, afterEnd: true}
    }
    this.draggable = draggable;
    this.meta = meta;
  }
}
