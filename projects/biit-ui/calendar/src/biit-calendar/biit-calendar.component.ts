import {
  AfterViewInit,
  ChangeDetectorRef,
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
import {
  addDays,
  addMinutes,
  differenceInMinutes,
  endOfWeek,
  Locale,
  setDefaultOptions,
  startOfDay,
  startOfHour
} from "date-fns";
import {EventColor} from "../utils/event-color";
import {CalendarEventTimesChangedEvent} from "angular-calendar";
import {finalize, fromEvent, Subject, takeUntil} from "rxjs";
import {CalendarEventClickEvent} from "./models/calendar-event-click-event";
import {ContextMenuComponent} from "@perfectmemory/ngx-contextmenu";
import {CalendarUtility} from "./calendar-utility";
import {CalendarConfiguration} from "./models/calendar-configuration";

@Component({
  selector: 'biit-calendar',
  templateUrl: './biit-calendar.component.html',
  styleUrls: ['./biit-calendar.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/calendar', alias: "calendar"}
  }]
})
export class BiitCalendarComponent implements OnInit, AfterViewInit, CalendarUtility{
  @Input() calendarMode: CalendarMode = CalendarMode.MONTH;
  @Input() viewDate: Date = new Date();
  @Input() events: CalendarEvent[] = [];
  @Input() gridContextMenu: ContextMenuComponent<any>;
  @Input() eventContextMenu: ContextMenuComponent<any>;
  @Input() calendarUtility: CalendarUtility;
  @Input() configuration: CalendarConfiguration = new CalendarConfiguration();
  @Output() onEventDrop: EventEmitter<CalendarEventTimesChangedEvent> = new EventEmitter<CalendarEventTimesChangedEvent>();
  @Output() onEventClick: EventEmitter<CalendarEventClickEvent> = new EventEmitter<CalendarEventClickEvent>();
  @Output() onEventDblClick: EventEmitter<CalendarEventClickEvent> = new EventEmitter<CalendarEventClickEvent>();
  @Output() onCreatedEvent: EventEmitter<CalendarEvent> = new EventEmitter<CalendarEvent>();
  protected locale: Locale;
  private weekStartsOn: 1 = 1;

  $calendarEvent = castTo<CalendarEvent>();

  constructor(private transloco: TranslocoService,
              private cdr: ChangeDetectorRef,
              private elem: ElementRef) { }

  customHeaderDate(date: Date): string {
        throw new Error('Method not implemented.');
    }

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
      this.elem.nativeElement.querySelector('.cal-time-events').scrollTop = differenceInMinutes(
        startOfHour(new Date()),
        startOfDay(new Date())
      );
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
  private floorToNearest(amount: number, precision: number) {
    return Math.floor(amount / precision) * precision;
  }

  private ceilToNearest(amount: number, precision: number) {
    return Math.ceil(amount / precision) * precision;
  }
  startDragToCreate(segment: any, segmentElement: HTMLElement) {
    if (!this.configuration.createOnDrag) {
      return;
    }
    const dragToSelectEvent: CalendarEvent = {
      id: this.events.length,
      title: undefined,
      start: segment.date,
      end: addMinutes(startOfHour(segment.date), 30),
      meta: {
        tmpEvent: true,
      },
      color: EventColor.RED,
    };
    this.events = [...this.events, dragToSelectEvent];
    const segmentPosition = segmentElement.getBoundingClientRect();
    const endOfView = endOfWeek(this.viewDate, {
      weekStartsOn: this.weekStartsOn,
    });

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          delete dragToSelectEvent.meta.tmpEvent;
          this.refreshCalendar();
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      )
      .subscribe((mouseMoveEvent: MouseEvent) => {
        const minutesDiff = this.ceilToNearest(
          mouseMoveEvent.clientY - segmentPosition.top,
          30
        );

        const daysDiff =
          this.floorToNearest(
            mouseMoveEvent.clientX - segmentPosition.left,
            segmentPosition.width
          ) / segmentPosition.width;

        const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
        if (newEnd > segment.date && newEnd < endOfView) {
          dragToSelectEvent.end = newEnd;
        }
        this.onCreatedEvent.emit(dragToSelectEvent);
        this.refreshCalendar();
      });
  }
  private refreshCalendar() {
    this.events = [...this.events];
    this.cdr.detectChanges();
  }
}

export enum CalendarMode {
  WEEK = 'WEEK',
  MONTH = 'MONTH'
}

export function castTo<T>(): (event) => T {
  return (event) => event as T
}
