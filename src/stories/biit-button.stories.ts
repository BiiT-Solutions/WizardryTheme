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
    buttonType: 'default',
    color: 'primary',
    disabled: false
  },
  argTypes: {
    buttonType: {
      name: 'buttonType',
      type: { name: 'string', required: false },
      defaultValue: 'default',
      description: 'Defines the type of button that will be rendered.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Inputs'
      },
      options: ['default', 'raised', 'flat', 'stroked'],
      control: {
        type: 'select'
      }
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      defaultValue: 'default',
      description: 'Defines the color palette used, defined by Material theme.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'empty' },
        category: 'Inputs'
      },
      options: ['empty', 'primary', 'accent', 'warn'],
      control: {
        type: 'select'
      }
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Disables the component interaction.',
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
      action: 'clicked',
      name: 'onClick',
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
      [buttonType]="buttonType"
      [color]="color"
      [disabled]="disabled"
      (onClick)="onClick()"
    >
      Button
    </app-biit-button>`
});

export const Default = Template.bind({});
Default.args = {
  buttonType: 'default',
  color: 'primary',
  disabled: false
}

export const Raised = Template.bind({});
Raised.args = {
  buttonType: 'raised',
  color: 'primary',
  disabled: false
}

export const Flat = Template.bind({});
Flat.args = {
  buttonType: 'flat',
  color: 'primary',
  disabled: false
}

export const Stroked = Template.bind({});
Stroked.args = {
  buttonType: 'stroked',
  color: 'primary',
  disabled: false
}
