import type {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {
  BiitActionButtonComponent
} from '@biit-solutions/wizardry-theme/button';
import {BiitIconService} from '@biit-solutions/wizardry-theme/icon';
import {completeIconSet} from '@biit-solutions/biit-icons-collection';
import { APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BiitGroupModule, BiitInputTextModule} from "@biit-solutions/wizardry-theme/inputs";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/Group',
  decorators: [
    moduleMetadata({
      imports: [BiitGroupModule, BiitInputTextModule, FormsModule],
      providers: [{ provide: APP_INITIALIZER, useFactory: biitIconServiceFactory, deps: [BiitIconService], multi: true }]
    }),
  ],
  args: {
    legend: 'Título',
    description: 'There is actually extraterrestrial life in the universe, they\'re just not stupid enough to invade a planet with Chuck Norris on it.',
    enablePlus: true,
    enableMinus: false
  }
} as any;

const Template: StoryFn<BiitActionButtonComponent> = (args: any) => ({
  props: args,
  template: `
    <div style="display: block;">
      <biit-group [legend]="legend"
                  [description]="description"
                  [enablePlus]="enablePlus"
                  [enableMinus]="enableMinus"
      >
        <div style="display: flex; flex-direction: column; gap: 1em;">
          <a>Chuck Norris doesn't read books. He stares them down until he gets the information he wants.</a>
          <biit-input-text placeholder="testing field"></biit-input-text>
          <biit-input-text placeholder="testing field"></biit-input-text>
        </div>
      </biit-group>
    </div>
`
});

export const Default = Template.bind({});
