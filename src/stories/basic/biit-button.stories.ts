import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BiitButtonComponent, BiitButtonModule } from 'biit-ui/button';

export default {
  title: 'Basic/Button/Regular',
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
    color: {
      name: 'type',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description: 'Defines the button design.',
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
        type: 'EventEmitter<PointerEvent>',
        category: 'Outputs'
      }
    },
    onDblClick: {
      action: 'onDblClick',
      name: 'onDblClick',
      description: 'Emits an Event object.',
      table: {
        type: 'EventEmitter<MouseEvent>',
        category: 'Outputs'
      }
    }
  }
} as Meta;

const Template: Story<BiitButtonComponent> = (args: BiitButtonComponent) => ({
  props: args,
  template: `
    <biit-button
      [color]="color"
      [disabled]="disabled"
      (onClick)="onClick($event)"
      (onDblClick)="onDblClick($event)"
    >
      {{content}}
    </biit-button>`
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  disabled: false
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  disabled: false
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  disabled: false
}
