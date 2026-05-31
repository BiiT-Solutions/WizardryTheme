import type {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {BiitButtonModule, BiitButtonComponent} from '@biit-solutions/wizardry-theme/button';
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
} as any;

const PrimaryTemplate: StoryFn<BiitButtonComponent> = (args: any) => ({
  props: args,
  template: `
    <button biit-button primary [disabled]="disabled" style="display: block">Button</button>
`});

export const Primary = PrimaryTemplate.bind({});

const SecondaryTemplate: StoryFn<BiitButtonComponent> = (args: any) => ({
  props: args,
  template: `
    <button biit-button secondary [disabled]="disabled" style="display: block">Button</button>
`});

export const Secondary = SecondaryTemplate.bind({});

const TertiaryTemplate: StoryFn<BiitButtonComponent> = (args: any) => ({
  props: args,
  template: `
    <button biit-button tertiary [disabled]="disabled" style="display: block">Button</button>
`});

export const Tertiary = TertiaryTemplate.bind({});

const QuaternaryTemplate: StoryFn<BiitButtonComponent> = (args: any) => ({
  props: args,
  template: `
    <button biit-button quaternary [disabled]="disabled" style="display: block">Button</button>
`});

export const Quaternary = QuaternaryTemplate.bind({});
