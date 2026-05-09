import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitTextareaModule, BiitTextareaComponent} from '@biit-solutions/wizardry-theme/inputs';
import {APP_INITIALIZER} from '@angular/core';
import {BiitIconService} from '@biit-solutions/wizardry-theme/icon';
import {completeIconSet} from '@biit-solutions/biit-icons-collection';

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
    description: '',
    info: '',
    disabled: false,
    readonly: false,
    required: false,
    maxLength: 500,
    placeholder: 'Textarea component'
  },
} as Meta;

const Template: Story<BiitTextareaComponent> = (args: BiitTextareaComponent) => ({
  props: args,
  template: `
    <biit-textarea [(ngModel)]="text"
                   [error]="error"
                   [description]="description"
                   [info]="info"
                   [disabled]="disabled"
                   [readonly]="readonly"
                   [maxLength]="maxLength"
                   [placeholder]="placeholder"
                   [required]="required"
                   resize-x resize-y
                   style="display: block"></biit-textarea>
`});

export const Primary = Template.bind({});
