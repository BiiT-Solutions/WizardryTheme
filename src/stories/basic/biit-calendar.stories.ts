import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitButtonModule, BiitButtonComponent} from 'biit-ui/button';
import {FormsModule} from '@angular/forms';
import {BiitLoginComponent} from "biit-ui/login";
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";
import {BiitCalendarComponent} from "../../../projects/biit-ui/calendar/src/biit-calendar/biit-calendar.component";
import {BiitCalendarModule} from "../../../projects/biit-ui/calendar/src/biit-calendar/biit-calendar.module";
import {CalendarEvent} from "../../../projects/biit-ui/calendar/src/biit-calendar/models/calendar-event";
import {EventColor} from "../../../projects/biit-ui/calendar/src/utils/event-color";

export default {
  title: 'Basic/Calendar',
  decorators: [
    moduleMetadata({
      imports: [BiitCalendarModule, FormsModule]
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

const Template: Story<BiitCalendarComponent> = (args: BiitCalendarComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
      <biit-calendar [viewDate]="viewDate"
                     [events]="events"
                     style="display: block; width: 100%; height: 95vh;"></biit-calendar>
`
  }
};

export const Weekly = Template.bind({});
Weekly.args = {
}
