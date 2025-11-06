import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitToggleModule} from 'wyzardry-theme/inputs';
import {BiitToggleComponent} from 'wyzardry-theme/inputs';

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
      description: 'Handles the variable to be modified.',
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
      description: 'Defines the label that will get printed alongside the toggle.',
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
    <biit-toggle [(ngModel)]="value"
                     [disabled]="disabled">
        {{label}}
    </biit-toggle>
`
});

export const Default = Template.bind({});
