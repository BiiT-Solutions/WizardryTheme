import {Component, Input, OnInit} from '@angular/core';
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";
import {CalendarEvent} from "./models/calendar-event";
import {enGB, es, nl} from "date-fns/locale";
import {Locale, setDefaultOptions} from "date-fns";
import {EventColor} from "../utils/event-color";

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
  protected locale: Locale;

  constructor(public transloco: TranslocoService) { }

  log(event) {
    console.log("DEVELOPMENT LOG: ", event)
  }

  ngOnInit(): void {
    this.initLocalization();
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
