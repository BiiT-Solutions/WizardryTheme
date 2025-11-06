import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  BiitActionButtonComponent,
  BiitActionButtonModule,
  BiitIconButtonModule
} from '@biit-solutions/wizardry-theme/button';
import {BiitIconService} from '@biit-solutions/wizardry-theme/icon';
import {completeIconSet} from '@biit-solutions/biit-icons-collection';
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
  argTypes: {
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

const Template: Story<BiitActionButtonComponent> = (args: BiitActionButtonComponent) => ({
  props: args,
  template: `
    <div style="display: block; height: 500px; width: 800px; background: #eeeeee">
      <biit-action-button position="top-left">
        <button biit-icon
          [icon]="'edit'"
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
      <biit-action-button position="top-middle">
        <button biit-icon
          [icon]="'edit'"
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
      <biit-action-button position="top-right">
        <button biit-icon
          [icon]="'edit'"
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

      <biit-action-button position="middle-left">
        <button biit-icon
          [icon]="'edit'"
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
      <biit-action-button position="middle-middle">
        <button biit-icon
          [icon]="'edit'"
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
      <biit-action-button position="middle-right">
        <button biit-icon
          [icon]="'edit'"
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

      <biit-action-button position="bottom-left">
        <button biit-icon
          [icon]="'edit'"
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
      <biit-action-button position="bottom-middle">
        <button biit-icon
          [icon]="'edit'"
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
      <biit-action-button position="bottom-right">
        <button biit-icon
          [icon]="'edit'"
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

    </div>
`
});

export const Default = Template.bind({});
