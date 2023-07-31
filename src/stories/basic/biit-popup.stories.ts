import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitPopupComponent, BiitPopupModule} from "biit-ui/popup";
import {BiitIconService} from 'biit-ui/icon';
import {completeIconSet} from 'biit-icons-collection';
import {APP_INITIALIZER} from '@angular/core';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/PopUp',
  decorators: [
    moduleMetadata({
      imports: [BiitPopupModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    background: true,
    title: 'This is a header title'
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
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'Defines the header text',
      table: {
        type: { summary: 'string' },
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
    },
    onClosed: {
      action: 'onClosed',
      name: 'onClosed',
      description: 'Emits an Event object.',
      table: {
        type: 'Event',
        category: 'Outputs'
      }
    }
  }
} as Meta;

const Template: Story<BiitPopupComponent> = (args: BiitPopupComponent) => ({
  props: args,
  template: `
    <biit-popup dark-bg closable
                [title]="title"
                (onClosed)="onClosed($event)">
      <div [innerHTML]="content" style="width: 100%"></div>
    </biit-popup>
`});

export const Default = Template.bind({});

const SixtyTemplate: Story<BiitPopupComponent> = (args: BiitPopupComponent) => ({
  props: args,
  template: `
    <biit-popup sixty-view dark-bg closable
                [title]="title"
                (onClosed)="onClosed($event)">
      <div [innerHTML]="content" style="width: 100%"></div>
    </biit-popup>
`});

export const SixtyView = SixtyTemplate.bind({});
