import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitToggleGroupModule, BiitToggleGroupComponent} from 'biit-ui/inputs';
import {completeIconSet} from "biit-icons-collection";
import {BiitIconService} from "biit-ui/icon";
import {APP_INITIALIZER} from "@angular/core";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/Toggle Group',
  decorators: [
    moduleMetadata({
      imports: [BiitToggleGroupModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    multiple: false,
    value: null,
    label: 'Toggle',
    disabled: false
  },
  argTypes: {
    label: {
      name: 'label',
      description: 'Defines the label that will get printed alongside the toggle.',
      type: { name: 'string', required: true },
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
    },
  }
} as Meta;

const Template: Story<BiitToggleGroupComponent> = (args: BiitToggleGroupComponent) => ({
  props: args,
  template:`
    <biit-toggle-group [(ngModel)]="value"
                       [multiple]="multiple"
                       [disabled]="disabled">
        <biit-toggle-button
          [text]="'Patata'"
          [value]="'patata'"
        />
        <biit-toggle-button
          [text]="'Bacon'"
          [value]="'bacon'"
        />
        <biit-toggle-button
          [text]="'Cauldron'"
          [icon]="'cauldron'"
          [value]="'cauldron'"
        />
        <biit-toggle-button
          [icon]="'cross'"
          [value]="'cross'"
        />
    </biit-toggle-group>

    <div
      (click)="disabled = !disabled"
      style="margin-top: 1em"
    >
      {{value}}
    </div>
`
});

export const Default = Template.bind({});
