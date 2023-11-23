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
  @Input() viewDate: Date = new Date();
  @Input() events: CalendarEvent[] = [
    {
      title: 'An all day event',
      color: EventColor.Blue,
      start: new Date(),
      allDay: true,
      actions: [{label: 'Testing', onClick: ()=>{}}]
    },
    {
      title: 'SUPA DUPA EVENT',
      color: EventColor.Red,
      start: new Date(new Date().setDate(24)),
      allDay: true,
    },
    {
      title: 'SUPA DUPA EVENT 2',
      color: EventColor.Yellow,
      start: new Date(new Date().setDate(24)),
      allDay: true,
    },
    {
      title: 'A non all day event',
      color: EventColor.Blue,
      start: new Date(),
    },
    {
      title: 'A non all day event pero el nombre es mas largo',
      color: EventColor.Red,
      start: new Date(new Date().setHours(1, 0)),
      end: new Date(new Date().setHours(2, 0)),
    },
    {
      title: 'A non all day event pero el nombre es mas largo',
      color: EventColor.Green,
      start: new Date(new Date().setHours(0, 0)),
      end: new Date(new Date().setHours(0, 50)),
    },
    {
      title: 'A non all day event pero el nombre es mas largo',
      color: EventColor.Purple,
      start: new Date(new Date().setHours(3, 0)),
      end: new Date(new Date().setHours(5, 0)),
    },
  ];
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
}
