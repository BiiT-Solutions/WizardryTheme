import {Story, Meta, moduleMetadata, forceReRender} from '@storybook/angular';
import {BiitToggleComponent} from 'wyzardry-theme/inputs';
import {APP_INITIALIZER} from "@angular/core";
import {BiitIconService} from "wyzardry-theme/icon";
import {completeIconSet} from "biit-icons-collection";
import {BiitCookiesConsentModule} from "wyzardry-theme/info";
import {BiitButtonModule} from "wyzardry-theme/button";
import {FormsModule} from "@angular/forms";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

function removeConsent() {
  localStorage.removeItem('cookies-consent');
  forceReRender();
}

export default {
  title: 'Composed/Cookies Pop-up',
  decorators: [
    moduleMetadata({
      imports: [BiitCookiesConsentModule, FormsModule, BiitButtonModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
} as Meta;

const Template: Story<BiitToggleComponent> = (args: BiitToggleComponent) => ({
  props: {
    ...args,
    removeConsent: () => removeConsent()
  },
  template:`
    <div style="display:block">
      <button biit-button (click)="removeConsent()">remove consent</button>
      <biit-cookies-consent></biit-cookies-consent>
    </div>

`
});

export const Default = Template.bind({});
