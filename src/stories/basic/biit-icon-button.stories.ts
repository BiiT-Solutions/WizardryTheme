import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BiitIconButtonComponent, BiitIconButtonModule } from '@biit-solutions/wizardry-theme/button';
import {BiitIconService} from '@biit-solutions/wizardry-theme/icon';
import {completeIconSet} from 'biit-icons-collection';
import {APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Button/Icon',
  decorators: [
    moduleMetadata({
      imports: [BiitIconButtonModule, FormsModule],
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
    <button biit-icon
      [icon]="icon"
      [disabled]="disabled"
      (click)="onClick($event)"
    ></button>`
});

export const Default = Template.bind({});
