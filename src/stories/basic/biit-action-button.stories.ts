import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitActionButtonModule, BiitIconButtonComponent, BiitIconButtonModule} from 'biit-ui/button';
import {BiitIconService} from 'biit-ui/icon';
import {completeIconSet} from 'biit-icons-collection';
import {APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Button/Action Button',
  decorators: [
    moduleMetadata({
      imports: [BiitActionButtonModule, BiitIconButtonModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    icon: 'edit',
    disabled: false
  },
  argTypes: {
    icon: {
      name: 'icon',
      type: {name: "string", required: false},
      defaultValue: 'edit',
      description: 'Icon name to be shown.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Content'
      },
      options: completeIconSet.map(iconSet => iconSet.name),
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
    }
  }
} as Meta;

const Template: Story<BiitIconButtonComponent> = (args: BiitIconButtonComponent) => ({
  props: args,
  template: `
    <biit-action-button overlay style="position: absolute">
      <button biit-icon main
        [icon]="icon"
        [disabled]="disabled"
        (click)="onClick($event)"
      ></button>
      <button biit-icon
        [icon]="'biit_logo'"
        [disabled]="disabled"
        (click)="onClick($event)"
      ></button>
      <button biit-icon
        [icon]="'cauldron'"
        [disabled]="disabled"
        (click)="onClick($event)"
      ></button>
    </biit-action-button>
    <a>Overlay mode</a>

    <biit-action-button style="display:block; margin-top: 2em">
      <button biit-icon main
        [icon]="icon"
        [disabled]="disabled"
        (click)="onClick($event)"
      ></button>
      <button biit-icon
        [icon]="'biit_logo'"
        [disabled]="disabled"
        (click)="onClick($event)"
      ></button>
      <button biit-icon
        [icon]="'cauldron'"
        [disabled]="disabled"
        (click)="onClick($event)"
      ></button>
    </biit-action-button>
    <a>Not Overlay mode</a>
`
});

export const Default = Template.bind({});
