import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";
import {BiitCalendarComponent, BiitCalendarModule, CalendarEvent, EventColor} from "biit-ui/calendar";
import {BiitIconButtonModule} from "biit-ui/button";
import {addMonths, addWeeks, subMonths, subWeeks} from "date-fns";

export default {
  title: 'Basic/Calendar',
  decorators: [
    moduleMetadata({
      imports: [BiitCalendarModule, FormsModule, BiitIconButtonModule]
    }),
  ],
  args: {
    viewDate: new Date(),
    events: [
      new CalendarEvent('all day event', new Date()),
      new CalendarEvent('1 line event', new Date(new Date().setHours(1, 0)), new Date(new Date().setHours(1, 30))),
      new CalendarEvent('2 line event so this title is longer', new Date(new Date().setHours(2, 0)), new Date(new Date().setHours(2, 45))),
      new CalendarEvent('3 line event so this title is longer', new Date(new Date().setHours(3, 0)), new Date(new Date().setHours(4, 0))),
      new CalendarEvent('Different color', new Date(), undefined, EventColor.Green)
    ]
  },
} as Meta;

export const Weekly: Story<BiitCalendarComponent> = (args: BiitCalendarComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: {
      ...args,
      addWeek: (value: Date) => addWeeks(value, 1),
      subWeek: (value: Date) => subWeeks(value, 1)
    },
    template: `
      <div style="display: flex; width: 100%; height: 90vh; align-items: center; justify-content: center">
        <div style="display: flex; width: 80%; height: 80%; flex-direction: column;">
          <div style="display: flex;">
            <button (click)="viewDate = subWeek(viewDate)">◀️</button>
            <button (click)="viewDate = addWeek(viewDate)">▶️</button>
          </div>
          <biit-calendar [calendarMode]="'WEEK'"
                         [viewDate]="viewDate"
                         [events]="events"
                         ></biit-calendar>
        </div>
      </div>
`
  }
};

export const Monthly: Story<BiitCalendarComponent> = (args: BiitCalendarComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: {
      ...args,
      addMonth: (value: Date) => addMonths(value, 1),
      subMonth: (value: Date) => subMonths(value, 1)
    },
    template: `
      <div style="display: flex; width: 100%; height: 90vh; align-items: center; justify-content: center">
        <div style="display: flex; width: 80%; height: 80%; flex-direction: column;">
          <div style="display: flex;">
            <button (click)="viewDate = subMonth(viewDate)">◀️</button>
            <button (click)="viewDate = addMonth(viewDate)">▶️</button>
          </div>
          <biit-calendar [calendarMode]="'MONTH'"
                         [viewDate]="viewDate"
                         [events]="events"
                         ></biit-calendar>
        </div>
      </div>
`
  }
};
