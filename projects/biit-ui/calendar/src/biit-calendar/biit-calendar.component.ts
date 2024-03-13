import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";
import {CalendarEvent} from "./models/calendar-event";
import {enGB, es, nl} from "date-fns/locale";
import {Locale, setDefaultOptions} from "date-fns";
import {EventColor} from "../utils/event-color";
import {CalendarEventTimesChangedEvent} from "angular-calendar";
import {Subject} from "rxjs";

@Component({
  selector: 'biit-calendar',
  templateUrl: './biit-calendar.component.html',
  styleUrls: ['./biit-calendar.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/calendar', alias: "calendar"}
  }]
})
export class BiitCalendarComponent implements OnInit {
  @Input() calendarMode: CalendarMode = CalendarMode.MONTH;
  @Input() viewDate: Date = new Date();
  @Input() events: CalendarEvent[] = [];
  @Output() onEventDrop: EventEmitter<CalendarEventTimesChangedEvent> = new EventEmitter<CalendarEventTimesChangedEvent>();
  protected locale: Locale;

  $calendarEvent = castTo<CalendarEvent>();

  constructor(public transloco: TranslocoService) { }

  log(event) {
    console.log("DEVELOPMENT LOG: ", event)
  }

  ngOnInit(): void {
    this.initLocalization();
    this.events.forEach((event, i) => {
      event.id = i+1;
    })
  }

  private initLocalization() {
    switch (this.transloco.getActiveLang()) {
      case 'es':
        this.locale = es;
        break;
      case 'nl':
        this.locale = nl;
        break;
      default:
        this.locale = enGB;
    }

    setDefaultOptions({locale: this.locale});
  }

  refresh = new Subject<void>();

  eventTimesChanged(changeEvent: CalendarEventTimesChangedEvent): void {
    let newEvent = false;
    let editEvent = this.events.filter(e => e.id == changeEvent.event.id)[0];
    if (!editEvent) {
      editEvent = CalendarEvent.clone(changeEvent.event as CalendarEvent);
      newEvent = true;
    }
    editEvent.start = changeEvent.newStart;
    if (changeEvent.newEnd) {
      editEvent.end = changeEvent.newEnd;
    }
    if (newEvent) {
      this.events.push(editEvent);
    }
    if (this.calendarMode == CalendarMode.MONTH) {
      this.viewDate = changeEvent.newStart;
    }
    this.events = [...this.events];
    this.onEventDrop.emit(changeEvent);
  }

  eventStyles(color: EventColor): Record<string, string> {
    return {
      '--event-primary': color.primary,
      '--event-secondary': color.secondary,
      '--event-hover': color.hover,
      '--event-tertiary': color.tertiary
    }
  }

  protected readonly CalendarMode = CalendarMode;
}

export enum CalendarMode {
  WEEK = 'WEEK',
  MONTH = 'MONTH'
}

export function castTo<T>(): (event) => T {
  return (event) => event as T
}
