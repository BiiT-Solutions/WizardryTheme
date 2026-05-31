import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {BiitToggleComponent} from '@biit-solutions/wizardry-theme/inputs';
import { APP_INITIALIZER } from "@angular/core";
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import {BiitIconService} from "@biit-solutions/wizardry-theme/icon";
import {completeIconSet} from '@biit-solutions/biit-icons-collection';
import {BiitCookiesConsentModule} from "@biit-solutions/wizardry-theme/info";
import {BiitButtonModule} from "@biit-solutions/wizardry-theme/button";
import {FormsModule} from "@angular/forms";

const forceReRender = (): void => addons.getChannel().emit(FORCE_RE_RENDER);

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return (): void => undefined;
}

function removeConsent() {
  localStorage.removeItem('cookies-consent');
  forceReRender();
}

const meta = {
  title: 'Composed/Cookies Pop-up',
  decorators: [
    moduleMetadata({
      imports: [BiitCookiesConsentModule, FormsModule, BiitButtonModule],
      providers: [{ provide: APP_INITIALIZER, useFactory: biitIconServiceFactory, deps: [BiitIconService], multi: true }]
    }),
  ],
} satisfies Meta<BiitToggleComponent>;

export default meta;

export const Default: StoryObj<BiitToggleComponent> = {
  render: (args) => ({
    props: {
      ...args,
      removeConsent: () => removeConsent(),
    },
    template: `
      <div style="display:block">
        <button biit-button (click)="removeConsent()">remove consent</button>
        <biit-cookies-consent></biit-cookies-consent>
      </div>
    `,
  }),
};
