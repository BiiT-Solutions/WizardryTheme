import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitToggleModule} from 'biit-ui/inputs';
import {BiitToggleComponent} from 'biit-ui/inputs';

export default {
  title: 'Basic/Inputs/Toggle',
  decorators: [
    moduleMetadata({
      imports: [BiitToggleModule, FormsModule]
    }),
  ],
  args: {
    value: false,
    label: 'Toggle',
    disabled: false
  },
  argTypes: {
    value: {
      name: 'value',
      description: 'Handles the object to be modified.',
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
    label: {
      name: 'label',
      description: 'Defines the object\'s variable name that will get printed as a label in the component.',
      type: { name: 'string', required: true },
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

const Template: Story<BiitToggleComponent> = (args: BiitToggleComponent) => ({
  props: args,
  template:`
    <app-biit-toggle [(ngModel)]="value"
                     [label]="label"
                     [disabled]="disabled"
    ></app-biit-toggle>
`
});

export const Default = Template.bind({});
