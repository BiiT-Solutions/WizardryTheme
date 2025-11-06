import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {APP_INITIALIZER} from '@angular/core';
import {BiitIconService} from '@biit-solutions/wizardry-theme/icon';
import {completeIconSet} from 'biit-icons-collection';
import {BiitMultiselectComponent, BiitMultiselectModule, BiitMultiselectType} from '@biit-solutions/wizardry-theme/inputs';
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

let _items = [
  {id: 1, name: 'Spring', description: 'This item has a description'},
  {id: 2, name: 'Summer'},
  {id: 3, name: 'Autumn'},
  {id: 4, name: 'Winter'}
];

let _value = [];

function onCreate(string: string) {
  const search = _items.find(i => i.name.toLowerCase() === string.toLowerCase());
  if (search) {
    _value.push(search);
    _value = [..._value];
  } else {
    const item = {id: Math.trunc(Math.random() * 1000), name: string, description: undefined};
    _items.push(item);
    _value.push(item);
    _items = [..._items];
    _value = [..._value];
  }
}

export default {
  title: 'Basic/Inputs/Multiselect',
  decorators: [
    moduleMetadata({
      imports: [BiitMultiselectModule, FormsModule, CommonModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi:true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    value: _value,
    items: _items,
    label: 'name',
    disabled: false,
    compact: false,
    type: BiitMultiselectType.DEFAULT,
    width: 512,
    description: 'This field has a description'
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
    },
    compact: {
      name: 'compact',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Enables compact mode for a smaller dropdown popup.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Shows an asterisk for the user to know it\'s a required field',
      table: {
        type: { summary: 'boolean' },
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      defaultValue: BiitMultiselectType.DEFAULT,
      description: 'Defines the selector design.',
      table: {
        type: { summary: 'string' },
        category: 'Style'
      },
      options: ['default', 'icon', 'chips'],
      control: {
        type: 'select'
      }
    },
    width: {
      name: 'width',
      type: { name: 'number', required: false },
      description: 'Defines selector width (for testing purposes, only for default mode).',
      table: {
        type: { summary: 'number' },
        category: 'Style'
      },
      control: {
        type: 'range',
        min: 256,
        max: 512,
        step: 1
      },
      if: {
        arg: 'compact',
        eq: false
      }
    }
  }
} as Meta;

const Template: Story<BiitMultiselectComponent> = (args: BiitMultiselectComponent) => ({
  props: args,
  template:`
    <div style="display:block; position: fixed; top: 50%; left: 50%; translate: -50% -50%; text-align: center;">
      Selected seasons:
      <div *ngFor="let item of value">
          <li>{{item.name}}</li>
      </div>
    </div>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name" descriptionField="description"
                   style="display:block; position: fixed; top: 1rem; left: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required" [description]="description"
    ></biit-multiselect>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name" descriptionField="description"
                   style="display:block; position: fixed; top: 1rem; right: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required" [description]="description"
    ></biit-multiselect>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name" descriptionField="description"
                   style="display:block; position: fixed; bottom: 1rem; left: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required" [description]="description"
    ></biit-multiselect>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name" descriptionField="description"
                   style="display:block; position: fixed; bottom: 1rem; right: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required" [description]="description"
    ></biit-multiselect>
`
});

export const Default = Template.bind({});

export const Compact = Template.bind({});
Compact.args = {
  compact: true
}

export const Icon = Template.bind({});
Icon.args = {
  type: BiitMultiselectType.ICON
}

export const Chips: Story<BiitMultiselectComponent> = (args: BiitMultiselectComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: {
      ...args,
      type: BiitMultiselectType.CHIPS,
      onCreate: (value: string) => onCreate(value)
    },
    template: `
    <div style="display:block; position: fixed; top: 50%; left: 50%; translate: -50% -50%; text-align: center;">
      Selected seasons:
      <div *ngFor="let item of value">
          <li>{{item.name}}</li>
      </div>
    </div>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name"
                   style="display:block; position: fixed; top: 1rem; left: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required"
    ></biit-multiselect>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name"
                   style="display:block; position: fixed; top: 1rem; right: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required"
    ></biit-multiselect>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name"
                   style="display:block; position: fixed; bottom: 1rem; left: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required"
    ></biit-multiselect>

    <biit-multiselect [(ngModel)]="value" title="Favorite season" [data]="items" value="id" label="name"
                   style="display:block; position: fixed; bottom: 1rem; right: 1rem"
                   [style.width]="type == 'default' && !compact ? width + 'px' : 'fit-content'" (onCreate)="onCreate($event)"
                   [disabled]="disabled" [type]="type" [compact]="compact" [required]="required"
    ></biit-multiselect>
`,
  }
};
