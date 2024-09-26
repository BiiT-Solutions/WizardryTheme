import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitCheckboxModule} from 'biit-ui/inputs';
import {BiitCheckboxComponent} from 'biit-ui/inputs';

export default {
  title: 'Basic/Inputs/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [BiitCheckboxModule, FormsModule]
    }),
  ],
  args: {
    items: [
      {id: 1, name: 'Spring', checked: false, description: 'This item has a description'},
      {id: 2, name: 'Summer', checked: false},
      {id: 3, name: 'Autumn', checked: false},
      {id: 4, name: 'Winter', checked: false}
    ],
    disabled: false
  },
  argTypes: {
    values: {
      name: 'value',
      description: 'Handles the boolean to be modified for each checkbox. (In this case, it\'s a boolean variable inside each item of the list)',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
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
    description: {
      name: 'description',
      type: { name: 'string', required: false },
      defaultValue: 'undefined',
      description: 'Adds a description to the checkbox label.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    showAlwaysDescription: {
      name: 'showAlwaysDescription',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Shows description as an underneath text.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
  }
} as Meta;

const Template: Story<BiitCheckboxComponent> = (args: BiitCheckboxComponent) => ({
  props: args,
  template:`
    <div *ngFor="let item of items">
      <biit-checkbox [(ngModel)]="item.checked"
                     [disabled]="disabled"
                     [showAlwaysDescription]="showAlwaysDescription"
                     [description]="item.description">
        {{item.name}}
      </biit-checkbox>
    </div>

    <div style="margin-top: 1rem">
        Selected items:
        <div *ngFor="let item of items">
            <li *ngIf="item.checked">{{item.name}}</li>
        </div>
    </div>
`
});

export const Default = Template.bind({});
