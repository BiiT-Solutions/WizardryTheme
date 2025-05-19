import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";
import {BiitCalendarComponent, BiitCalendarModule, CalendarEvent, EventColor} from "biit-ui/calendar";
import {BiitIconButtonModule} from "biit-ui/button";
import {addMonths, addWeeks, subMonths, subWeeks} from "date-fns";
import { DragAndDropModule } from 'angular-draggable-droppable';
import {CalendarEventTimesChangedEvent} from "angular-calendar";
import {ContextMenuModule} from "@perfectmemory/ngx-contextmenu";

function saveEvent(value: CalendarEventTimesChangedEvent, events: CalendarEvent[]) {
  let event = events.filter(e => e.id == value.event.id)[0];
  if (!event.id) {
    event.id = events.length;
    event.title = 'haha surprise!';
  }
}

export default {
  title: 'Basic/Calendar',
  decorators: [
    moduleMetadata({
      imports: [BiitCalendarModule, FormsModule, BiitIconButtonModule, DragAndDropModule, ContextMenuModule]
    }),
  ],
  args: {
    viewDate: new Date(),
    events: [
      new CalendarEvent(undefined, 'all day event', new Date(), new Date(), false, true),
      new CalendarEvent(undefined, '1 line event', new Date(new Date().setHours(1, 0)), new Date(new Date().setHours(1, 30))),
      new CalendarEvent(undefined, '2 line event so this title is longer', new Date(new Date().setHours(2, 0)), new Date(new Date().setHours(2, 45))),
      new CalendarEvent(undefined, '3 line event so this title is longer', new Date(new Date().setHours(3, 0)), new Date(new Date().setHours(4, 0))),
      new CalendarEvent(undefined, 'Different color', new Date(), new Date(), false, true, EventColor.GREEN),
      new CalendarEvent(undefined, 'Different color', new Date(new Date().setDate(new Date().getDate() - 1)), new Date(new Date().setDate(new Date().getDate() - 1)), false, true, EventColor.GREEN)
    ],
    dragEvent: new CalendarEvent(undefined, 'Drag Event', new Date(), new Date(), false, true, EventColor.PURPLE)
  },
} as Meta;

export const Weekly: Story<BiitCalendarComponent> = (args: BiitCalendarComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: {
      ...args,
      addWeek: (value: Date) => addWeeks(value, 1),
      subWeek: (value: Date) => subWeeks(value, 1),
      saveEvent: (value: CalendarEventTimesChangedEvent, events: CalendarEvent[]) => {

      }
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
                         [gridContextMenu]="gridContextMenu"
                         [eventContextMenu]="eventContextMenu"
                         (onEventDrop)="saveEvent($event, events)"
                         ></biit-calendar>
        </div>
      </div>

      <context-menu #gridContextMenu>
        <ng-template contextMenuItem>Add Event</ng-template>
      </context-menu>

      <context-menu #eventContextMenu>
        <ng-template contextMenuItem>Edit Event</ng-template>
        <ng-template contextMenuItem>Delete Event</ng-template>
      </context-menu>
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
      subMonth: (value: Date) => subMonths(value, 1),
      saveEvent: (value: CalendarEventTimesChangedEvent, events: CalendarEvent[]) => saveEvent(value, events)
    },
    template: `
      <div
        class="card"
        mwlDroppable
        dragOverClass="drag-over"
      >
        <li mwlDraggable
            [dropData]="{event: dragEvent}"
            [touchStartLongPress]="{ delay: 300, delta: 30 }"
            dragActiveClass="drag-active">
          <a href="javascript:;">
            Drag Event
          </a>
        </li>
      </div>
      <div style="display: flex; width: 100%; height: 90vh; align-items: center; justify-content: center">
        <div style="display: flex; width: 80%; height: 80%; flex-direction: column;">
          <div style="display: flex;">
            <button (click)="viewDate = subMonth(viewDate)">◀️</button>
            <button (click)="viewDate = addMonth(viewDate)">▶️</button>
          </div>
          <biit-calendar [calendarMode]="'MONTH'"
                         [viewDate]="viewDate"
                         [events]="events"
                         (onEventDrop)="saveEvent($event, events)"
                         ></biit-calendar>
        </div>
      </div>
`
  }
};
