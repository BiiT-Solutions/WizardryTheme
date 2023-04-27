import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitRadioButtonModule} from 'biit-ui/inputs';
import {BiitRadioButtonComponent} from 'biit-ui/inputs';
import {BiitIconService} from 'biit-ui/icon';
import {completeIconSet} from 'biit-icons-collection';
import {APP_INITIALIZER} from '@angular/core';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/Radio Button',
  decorators: [
    moduleMetadata({
      imports: [BiitRadioButtonModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    items: [
      {id: 1, name: 'Spring', checked: false},
      {id: 2, name: 'Summer', checked: false},
      {id: 3, name: 'Autumn', checked: false},
      {id: 4, name: 'Winter', checked: false}
    ],
    id: '',
    name: 'radio',
    value: '',
    selected: '',
    disabled: false
  },
  argTypes: {
    id: {
      name: 'id',
      description: 'Id string for a radio button (MUST BE UNIQUE).',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'string'
      }
    },
    name: {
      name: 'name',
      description: 'Id string for radio group (MUST BE THE SAME IN ALL THE BUTTONS OF A GROUP).',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'string'
      }
    },
    value: {
      name: 'value',
      description: 'Data to be written in the target variable.',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    selected: {
      name: 'control value',
      description: 'Defines the target variable that we\'ll write with the contents of "value" input variable.',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'object'
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
    }
  }
} as Meta;

const Template: Story<BiitRadioButtonComponent> = (args: BiitRadioButtonComponent) => ({
  props: args,
  template:`
    <div *ngFor="let item of items, let i = index">
      <biit-radio-button [(ngModel)]="selected"
                         [id]="name + item.id"
                         [name]="name"
                         [value]="item.name"
                         [disabled]="disabled">
        {{item.name}}
      </biit-radio-button>
    </div>

    <div style="margin-top: 1rem">
        Selected item: {{selected ? selected : 'None'}}
    </div>
`
});

export const Default = Template.bind({});
