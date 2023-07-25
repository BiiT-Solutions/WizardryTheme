import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitButtonModule, BiitButtonComponent} from 'biit-ui/button';
import {FormsModule} from '@angular/forms';

export default {
  title: 'Basic/Button/Regular',
  decorators: [
    moduleMetadata({
      imports: [BiitButtonModule, FormsModule]
    }),
  ],
  args: {
    disabled: false
  },
} as Meta;

const PrimaryTemplate: Story<BiitButtonComponent> = (args: BiitButtonComponent) => ({
  props: args,
  template: `
    <button biit-button primary [disabled]="disabled" style="display: block">Hewwooo</button>
`});

export const Primary = PrimaryTemplate.bind({});

const SecondaryTemplate: Story<BiitButtonComponent> = (args: BiitButtonComponent) => ({
  props: args,
  template: `
    <button biit-button secondary [disabled]="disabled" style="display: block">Hewwooo</button>
`});

export const Secondary = SecondaryTemplate.bind({});

const TertiaryTemplate: Story<BiitButtonComponent> = (args: BiitButtonComponent) => ({
  props: args,
  template: `
    <button biit-button tertiary [disabled]="disabled" style="display: block">Hewwooo</button>
`});

export const Tertiary = TertiaryTemplate.bind({});
