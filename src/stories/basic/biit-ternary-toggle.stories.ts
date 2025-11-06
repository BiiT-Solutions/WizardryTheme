import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitTernaryToggleModule} from 'wyzardry-theme/inputs';
import {BiitTernaryToggleComponent} from 'wyzardry-theme/inputs';

export default {
  title: 'Basic/Inputs/Ternary Toggle',
  decorators: [
    moduleMetadata({
      imports: [BiitTernaryToggleModule, FormsModule]
    }),
  ],
  args: {
    value: undefined,
    label: 'Ternary Toggle',
    appended_text: 'Appended text',
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
    appended_text: {
      name: 'appended_text',
      description: 'Defines the appended text that will get printed before the toggle.',
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

const Template: Story<BiitTernaryToggleComponent> = (args: BiitTernaryToggleComponent) => ({
  props: args,
  template:`
    <biit-ternary-togle [(ngModel)]="value"
                     [disabled]="disabled">
                     <label appended-text> {{appended_text}} </label>
        {{label}}
    </biit-ternary-togle>
`
});

export const Default = Template.bind({});
