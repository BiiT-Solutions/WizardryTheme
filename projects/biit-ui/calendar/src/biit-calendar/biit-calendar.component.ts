import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";
import {CalendarEvent} from "./models/calendar-event";
import {enGB, es, nl} from "date-fns/locale";
import {differenceInMinutes, Locale, setDefaultOptions, startOfDay, startOfHour} from "date-fns";
import {EventColor} from "../utils/event-color";
import {CalendarEventTimesChangedEvent} from "angular-calendar";
import {Subject} from "rxjs";
import {CalendarEventClickEvent} from "./models/calendar-event-click-event";

@Component({
  selector: 'biit-calendar',
  templateUrl: './biit-calendar.component.html',
  styleUrls: ['./biit-calendar.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/calendar', alias: "calendar"}
  }]
})
export class BiitCalendarComponent implements OnInit, AfterViewInit {
  @Input() calendarMode: CalendarMode = CalendarMode.MONTH;
  @Input() viewDate: Date = new Date();
  @Input() events: CalendarEvent[] = [];
  @Output() onEventDrop: EventEmitter<CalendarEventTimesChangedEvent> = new EventEmitter<CalendarEventTimesChangedEvent>();
  @Output() onEventClick: EventEmitter<CalendarEventClickEvent> = new EventEmitter<CalendarEventClickEvent>();
  @Output() onEventDblClick: EventEmitter<CalendarEventClickEvent> = new EventEmitter<CalendarEventClickEvent>();
  protected locale: Locale;

  $calendarEvent = castTo<CalendarEvent>();

  constructor(private transloco: TranslocoService,
              private elem: ElementRef) { }

  log(event) {
    console.log("DEVELOPMENT LOG: ", event)
  }

  ngOnInit(): void {
    this.initLocalization();
  }

  ngAfterViewInit() {
    this.scrollToCurrentView();
  }

  private scrollToCurrentView() {
    if (this.calendarMode === CalendarMode.WEEK) {
      // each hour is 60px high, so to get the pixels to scroll it's just the amount of minutes since midnight
      const minutesSinceStartOfDay = differenceInMinutes(
        startOfHour(new Date()),
        startOfDay(new Date())
      );
      this.elem.nativeElement.querySelector('.cal-time-events').scrollTop = minutesSinceStartOfDay;
    }
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
