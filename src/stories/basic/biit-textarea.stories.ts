import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitTextareaModule, BiitTextareaComponent} from 'biit-ui/inputs';
import {APP_INITIALIZER} from '@angular/core';
import {BiitIconService} from 'biit-ui/icon';
import {completeIconSet} from 'biit-icons-collection';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/Textarea',
  decorators: [
    moduleMetadata({
      imports: [BiitTextareaModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi:true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    text: '',
    error: '',
    disabled: false,
    readonly: false,
    mandatory: false,
    maxLength: 500,
    placeholder: 'Textarea component'
  },
} as Meta;

const Template: Story<BiitTextareaComponent> = (args: BiitTextareaComponent) => ({
  props: args,
  template: `
    <biit-textarea [(ngModel)]="text"
                   [error]="error"
                   [disabled]="disabled"
                   [readonly]="readonly"
                   [maxLength]="maxLength"
                   [placeholder]="placeholder"
                   [mandatory]="mandatory"
                   resize-x resize-y
                   style="display: block"></biit-textarea>
`});

export const Primary = Template.bind({});
