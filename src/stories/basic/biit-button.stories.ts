import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BiitButtonComponent, BiitButtonModule } from 'biit-ui/button';

export default {
  title: 'Basic/Button',
  decorators: [
    moduleMetadata({
      imports: [BiitButtonModule],
    }),
  ],
  args: {
    type: 'primary',
    disabled: false
  },
  argTypes: {
    content: {
      name: 'content',
      type: { name: 'string', required: false },
      defaultValue: 'Button',
      description: 'Defines text content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Content'
      },
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description: 'Defines the type of button that will be rendered.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Inputs'
      },
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select'
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
    onClick: {
      action: 'onClick',
      name: 'onClick',
      description: 'Emits an Event object.',
      table: {
        type: 'Event',
        category: 'Outputs'
      }
    },
    onDoubleClick: {
      action: 'onDoubleClick',
      name: 'onDoubleClick',
      description: 'Emits an Event object.',
      table: {
        type: 'Event',
        category: 'Outputs'
      }
    }
  }
} as Meta;

const Template: Story<BiitButtonComponent> = (args: BiitButtonComponent) => ({
  props: args,
  template: `
    <app-biit-button
      [type]="type"
      [disabled]="disabled"
      (onClick)="onClick($event)"
      (onDoubleClick)="onDoubleClick($event)"
    >
      {{content}}
    </app-biit-button>`
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  disabled: false
}

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  disabled: false
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  disabled: false
}
