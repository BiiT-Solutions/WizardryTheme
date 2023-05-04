import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitInputTextComponent, BiitInputTextModule, Type} from "biit-ui/inputs";
import {BiitIconService} from "biit-ui/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";
import {FormsModule} from "@angular/forms";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/Text',
  decorators: [
    moduleMetadata({
      imports: [BiitInputTextModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    error: null,
    icon: null,
    placeholder: 'PlaceHolder',
    type: 'text',
    value: '',
    width: '200px'
  },
  argTypes: {
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      defaultValue: 'PlaceHolder',
      description: 'Defines the input placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'Defines input value content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    width: {
      name: 'width',
      type: { name: 'string', required: false },
      defaultValue: '6rem',
      description: 'Defines the input width',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    error: {
      name: 'error',
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'Defines a message and error view',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: null },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    icon: {
      name: 'icon',
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'Defines the icon showed to perform action',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
        category: 'Inputs'
      },
      options: completeIconSet.map(icon => icon.name),
      control: {
        type: 'select'
      }
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      defaultValue: 'text',
      description: 'Defines the input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
        category: 'Inputs'
      },
      options: Object.keys(Type),
      control: {
        type: 'select'
      }
    },
    onActionPerformed: {
      action: 'onActionPerformed',
      name: 'onActionPerformed',
      description: 'Emits a void event to tell the performed action by the icon has been performed by user.',
      table: {
        type: 'EventEmitter<void>',
        category: 'Outputs'
      }
    },
  }
} as Meta;

const Template: Story<BiitInputTextComponent> = (args: BiitInputTextComponent) => ({
  props: args,
  template: `
    <biit-input-text
     [placeholder]="placeholder"
     [error]="error"
     [type]="type"
     [icon]="icon"
     [(ngModel)]="value"
     (onActionPerformed)="onActionPerformed()"
     style="width: 256px; display: block;"
     >

    </biit-input-text>`
});

export const Default = Template.bind({});
Default.args = {
}
