import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  BiitActionButtonComponent,
  BiitActionButtonModule,
  BiitIconButtonModule
} from 'biit-ui/button';
import {BiitIconService} from 'biit-ui/icon';
import {completeIconSet} from 'biit-icons-collection';
import {APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BiitGroupModule, BiitInputTextModule} from "biit-ui/inputs";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Inputs/Group',
  decorators: [
    moduleMetadata({
      imports: [BiitGroupModule, BiitInputTextModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],

} as Meta;

const Template: Story<BiitActionButtonComponent> = (args: BiitActionButtonComponent) => ({
  props: args,
  template: `
    <div style="display: block; height: 500px; width: 800px; background: #eeeeee">
      <biit-group>
        <a>Chuck Norris doesn't read books. He stares them down until he gets the information he wants.</a>
        <hr style="border: 1px solid #262626">
        <biit-input-text placeholder="testing field"></biit-input-text>
        <biit-input-text placeholder="testing field"></biit-input-text>
      </biit-group>
    </div>
`
});

export const Default = Template.bind({});
