import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitDatePickerComponent, BiitDatePickerModule} from 'biit-ui/inputs';
import {BiitIconService} from "biit-ui/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/DatePicker',
  decorators: [
    moduleMetadata({
      imports: [BiitDatePickerModule, FormsModule, TranslocoStorybookModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi:true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    placeholder: 'Start Date',
    date: null,
    timePicker: false,
    disabled: false,
    disabledDays: [],
    disableWeekdays: false,
    disableWeekends: false,
    error: ""
  },
  argTypes: {
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      defaultValue: 'PlaceHolder',
      description: 'Defines the input placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    error: {
      name: 'error',
      type: { name: 'string', required: false },
      description: 'Shows an error message',
      table: {
        type: { summary: 'string' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    date: {
      name: 'date',
      description: 'Date object to be modified.',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'date'
      }
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Disables component interactions.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    timePicker: {
      name: 'timePicker',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Shows the time picker.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    disabledDays: {
      name: 'disabledDays',
      type: { name: 'string', required: false },
      description: 'Disables weekdays.',
      table: {
        type: { summary: 'Date[]' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'array'
      }
    },
    disableWeekdays: {
      name: 'disableWeekdays',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Disables weekdays.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    disableWeekends: {
      name: 'disableWeekends',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Disables weekend days.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

const Template: Story<BiitDatePickerComponent> = (args: BiitDatePickerComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
        <biit-datepicker [(ngModel)]="date"
                         [placeholder]="placeholder"
                         [timePicker]="timePicker"
                         [disabled]="disabled"
                         [disabledDays]="disabledDays"
                         [disableWeekdays]="disableWeekdays"
                         [disableWeekends]="disableWeekends"
                         [error]="error"
                         style="display: block; width: 300px;"></biit-datepicker>
    `
  }
};

export const Default = Template.bind({});

const TemplateCalendar: Story<BiitDatePickerComponent> = (args: BiitDatePickerComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
        <biit-datepicker [(ngModel)]="date"
                         [placeholder]="placeholder"
                         [timePicker]="timePicker"
                         [disabled]="disabled"
                         [disabledDays]="disabledDays"
                         [disableWeekdays]="disableWeekdays"
                         [disableWeekends]="disableWeekends"
                         calendar-mode
                         style="display: block; width: 300px;"></biit-datepicker>
    `
  }
};

export const CalendarMode = TemplateCalendar.bind({});
