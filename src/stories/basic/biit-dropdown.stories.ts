import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitDropdownModule} from 'biit-ui/inputs';
import {BiitDropdownComponent} from 'biit-ui/inputs';
import {FormsModule} from '@angular/forms';

export default {
  title: 'Basic/Inputs/Dropdown',
  decorators: [
    moduleMetadata({
      imports: [BiitDropdownModule, FormsModule]
    }),
  ],
  args: {
    value: {id: 1, name: 'Spring'},
    items: [
      {id: 1, name: 'Spring'},
      {id: 2, name: 'Summer'},
      {id: 3, name: 'Autumn'},
      {id: 4, name: 'Winter'}
    ],
    label: 'name',
    disabled: false
  },
  argTypes: {
    value: {
      name: 'ngModel',
      description: 'Handles the object to be modified.',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    items: {
      name: 'items',
      description: 'Defines the list of objects to select.',
      table: {
        type: { summary: 'Object[]' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    label: {
      name: 'label',
      description: 'Defines the object\'s variable name that will get printed as a label in the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'text'
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

const Template: Story<BiitDropdownComponent<{id:number, name:string}>> = (args: BiitDropdownComponent<{id:number, name:string}>) => ({
  props: args,
  template:`
    <div style="text-align: center; margin-bottom: 10px;">
      Selected season: {{value.name}}
    </div>

    <app-biit-dropdown [(ngModel)]="value"
                       [items]="items"
                       [label]="label"
                       [disabled]="disabled"
    ></app-biit-dropdown>
`
});

export const Default = Template.bind({});
