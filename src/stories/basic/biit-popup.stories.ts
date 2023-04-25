import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitPopupComponent, BiitPopupModule} from "biit-ui/popup";

export default {
  title: 'Basic/PopUp',
  decorators: [
    moduleMetadata({
      imports: [BiitPopupModule],
    }),
  ],
  args: {
    background: true
  },
  argTypes: {
    content: {
      name: 'content',
      type: { name: 'string', required: false },
      defaultValue: '<center><h1>E</h1><h2>F P</h2><h3>T O Z</h3><h4>L P E D</h4><h5>P E C F D</h5><h6>F E L O P Z D</h6></center>',
      description: 'Defines text content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '<center><h1>E</h1><h2>F P</h2><h3>T O Z</h3><h4>L P E D</h4><h5>P E C F D</h5><h6>F E L O P Z D</h6></center>' },
        category: 'Content'
      },
      control: {
        type: 'text'
      }
    },
    background: {
      name: 'background',
      type: { name: 'boolean', required: false },
      defaultValue: true,
      description: 'It shows a background blocking access to components under',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: true },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

const Template: Story<BiitPopupComponent> = (args: BiitPopupComponent) => ({
  props: args,
  template: `
    <biit-popup [background]="background">
    <div [innerHTML]="content"></div>
    </biit-popup>`
});

export const Default = Template.bind({});
Default.args = {
}
