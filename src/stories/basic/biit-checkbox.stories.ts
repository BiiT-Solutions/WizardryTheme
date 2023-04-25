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
      {id: 1, name: 'Spring', checked: false},
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
    }
  }
} as Meta;

const Template: Story<BiitCheckboxComponent> = (args: BiitCheckboxComponent) => ({
  props: args,
  template:`
    <div *ngFor="let item of items">
      <app-biit-checkbox [(ngModel)]="item.checked"
                         [disabled]="disabled">
        {{item.name}}
      </app-biit-checkbox>
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
