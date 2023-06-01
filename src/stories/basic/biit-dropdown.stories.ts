import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitDropdownModule} from 'biit-ui/inputs';
import {BiitDropdownComponent} from 'biit-ui/inputs';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {APP_INITIALIZER} from '@angular/core';
import {BiitIconService} from 'biit-ui/icon';
import {completeIconSet} from 'biit-icons-collection';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/Dropdown',
  decorators: [
    moduleMetadata({
      imports: [BiitDropdownModule, FormsModule, CommonModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi:true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    value: undefined,
    items: [
      {id: 1, name: 'Spring'},
      {id: 2, name: 'Summer'},
      {id: 3, name: 'Autumn'},
      {id: 4, name: 'Winter'}
    ],
    label: 'name',
    disabled: false
  },
  argTypes: {
    value: {
      name: 'ngModel',
      description: 'Handles the object to be modified.',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    items: {
      name: 'items',
      description: 'Defines the list of objects to select.',
      table: {
        type: { summary: 'Object[]' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    label: {
      name: 'label',
      description: 'Defines the object\'s variable name that will get printed as a label in the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
        category: 'Inputs'
      },
      control: {
        type: 'text'
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
    }
  }
} as Meta;

const TemplateExpanded: Story<BiitDropdownComponent> = (args: BiitDropdownComponent) => ({
  props: args,
  template:`
    <div style="text-align: center; margin-bottom: 10px;">
      Selected season: {{value?.name}}
    </div>

    <biit-dropdown [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name"
                    style="display:block"
    ></biit-dropdown>
`
});

export const Expanded = TemplateExpanded.bind({});

const TemplateCompact: Story<BiitDropdownComponent> = (args: BiitDropdownComponent) => ({
  props: args,
  template:`
    <div style="text-align: center; margin-bottom: 10px;">
      Selected season: {{value?.name}}
    </div>

    <biit-dropdown [(ngModel)]="value" title="Worst season" [data]="items" value="id" label="name"
                    style="display:block" [compact]="true"
    ></biit-dropdown>
`
});

export const Compact = TemplateCompact.bind({});
