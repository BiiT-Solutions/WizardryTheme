import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {
  BiitCheckboxModule,
  BiitInputTextModule,
  BiitRadioButtonModule,
  BiitTextareaModule,
  BiitToggleModule
} from '@biit-solutions/wizardry-theme/inputs';
import {BiitToggleComponent} from '@biit-solutions/wizardry-theme/inputs';
import {BiitTooltipIconModule} from "@biit-solutions/wizardry-theme/info";
import {APP_INITIALIZER} from "@angular/core";
import {BiitIconService} from "@biit-solutions/wizardry-theme/icon";
import {completeIconSet} from '@biit-solutions/biit-icons-collection';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Info/Tooltip Icon',
  decorators: [
    moduleMetadata({
      imports: [BiitTooltipIconModule, BiitInputTextModule, BiitTextareaModule, BiitToggleModule, BiitCheckboxModule, BiitRadioButtonModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    text: 'Testing tooltip',
    selected: ''
  }
} as Meta;

const Template: Story<BiitToggleComponent> = (args: BiitToggleComponent) => ({
  props: args,
  template:`
    <div style="width: 500px">
      <biit-input-text [info]="text" placeholder="Input text"></biit-input-text>
      <biit-textarea [info]="text" placeholder="Textarea"></biit-textarea>
    </div>

    <div style="display: flex">
      <biit-toggle>Toggle</biit-toggle>
      <biit-tooltip-icon inline [text]="text"></biit-tooltip-icon>
    </div>

    <div style="display: flex">
      <biit-checkbox>Checkbox</biit-checkbox>
      <biit-tooltip-icon inline [text]="text"></biit-tooltip-icon>
    </div>

    <div style="display: flex">
      <biit-radio-button [(ngModel)]="selected">Radio button</biit-radio-button>
      <biit-tooltip-icon inline [text]="text"></biit-tooltip-icon>
    </div>

    <div style="display: flex">
      <biit-toggle>Toggle</biit-toggle>
      <biit-tooltip-icon inline [text]="text"></biit-tooltip-icon>
    </div>

`
});

export const Default = Template.bind({});
