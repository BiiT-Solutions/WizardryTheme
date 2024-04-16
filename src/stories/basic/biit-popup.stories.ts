import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitPopupComponent, BiitPopupModule} from "biit-ui/popup";
import {BiitIconService} from 'biit-ui/icon';
import {completeIconSet} from 'biit-icons-collection';
import {APP_INITIALIZER} from '@angular/core';
import {BiitButtonModule} from 'biit-ui/button';
import {FormsModule} from "@angular/forms";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/PopUp',
  decorators: [
    moduleMetadata({
      imports: [BiitPopupModule, BiitButtonModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    showPopup: false,
    showSixty: false,
    content: '<center><h1>E</h1><h2>F P</h2><h3>T O Z</h3><h4>L P E D</h4><h5>P E C F D</h5><h6>F E L O P Z D</h6></center>',
    title: 'This is a header title'
  },
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'Defines the header text',
      table: {
        type: { summary: 'string' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
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
    },
    sixty_view: {
      name: 'sixty-view',
      description: 'Styles the popup as a Sixty View.',
      table: {
        category: 'Attributes'
      },
      control: false
    },
    dark_bg: {
      name: 'clear-bg',
      description: 'Makes the background transparent behind the popup.',
      table: {
        category: 'Attributes'
      },
      control: false
    },
    closable: {
      name: 'closable',
      description: 'Allows the user to close the component from an X icon.',
      table: {
        category: 'Attributes'
      },
      control: false
    },
    closableOutside: {
      name: 'closableOutside',
      description: 'Allows the user to close the component clicking outside the popup.',
      table: {
        category: 'Attributes'
      },
      control: false
    },
    no_header: {
      name: 'no-header',
      description: 'Hides the whole header for the popup.',
      table: {
        category: 'Attributes'
      },
      control: false
    },
    showPopup: {
      table: {
        disable: true
      }
    },
    showSixty: {
      table: {
        disable: true
      }
    },
    content: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<BiitPopupComponent> = (args: BiitPopupComponent) => ({
  props: args,
  template: `
    <button biit-button (click)="showPopup = true">Show Popup</button>
    <biit-popup *ngIf="showPopup"
                closable closable-outside
                [title]="title"
                (onClosed)="onClosed($event); showPopup = false;">
      <div [innerHTML]="content" style="width: 100%"></div>
    </biit-popup>
`});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `
<biit-popup *ngIf="showPopup"
            closable closable-outside
            [title]="title"
            (onClosed)="onClosed($event)"
>
  //Your content here
</biit-popup>`,
      language: 'typescript',
      type: 'auto'
    }
  }
}

const SixtyTemplate: Story<BiitPopupComponent> = (args: BiitPopupComponent) => ({
  props: args,
  template: `
    <button biit-button (click)="showSixty = true">Show Sixty View</button>
    <biit-popup *ngIf="showSixty"
                sixty-view closable closable-outside
                [title]="title"
                (onClosed)="onClosed($event); showSixty = false;">
      <div [innerHTML]="content" style="width: 100%"></div>
    </biit-popup>
`});

export const SixtyView = SixtyTemplate.bind({});
