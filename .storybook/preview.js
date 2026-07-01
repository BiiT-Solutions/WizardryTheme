import {setCompodocJson} from "@storybook/addon-docs/angular";
import {applicationConfig, moduleMetadata} from "@storybook/angular";
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from "../projects/wizardry-theme/i18n/src/i18n/supported-languages";
import {provideHttpClient} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {APP_INITIALIZER, ENVIRONMENT_INITIALIZER, inject} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideTransloco, translocoConfig, TranslocoModule, TranslocoService} from "@jsverse/transloco";
import {provideTranslocoLocale} from "@jsverse/transloco-locale";
import {completeIconSet} from "@biit-solutions/biit-icons-collection";
import {BiitIconService} from "@biit-solutions/wizardry-theme/icon";
import {TranslocoHttpLoader} from "@biit-solutions/wizardry-theme/i18n";
import {translocoStorybookInitializer} from "../src/app/transloco/transloco-storybook.module";
require("web-file-polyfill");

try {
  setCompodocJson(require("../documentation.json"));
} catch {
  console.warn('Compodoc JSON not found. Run "npm run docs:json" to enable docs metadata.');
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}

export const globalTypes = {
  // adds a custom dropdown menu in the Storybook UI toolbar
  language: {
    name: "Language",
    description: `Available languages`,
    defaultValue: DEFAULT_LANGUAGE.code,
    toolbar: {
      icon: "globe",
      items: SUPPORTED_LANGUAGES.map(language => ({
        value: language.code,
        left: language.icon,
        title: language.title,
      })),
    },
  },
};

const globalModuleImports = moduleMetadata({
  imports: [
    TranslocoModule,
    RouterTestingModule,
    BrowserAnimationsModule
  ]
});

const globalAppProviders = applicationConfig({
  providers: [
    provideHttpClient(),
    ...provideTransloco({
      loader: TranslocoHttpLoader,
      config: translocoConfig({
        availableLangs: SUPPORTED_LANGUAGES.map(language => language.code),
        defaultLang: DEFAULT_LANGUAGE.code,
        fallbackLang: DEFAULT_LANGUAGE.code,
        reRenderOnLangChange: true,
        missingHandler: {
          logMissingKey: false,
        },
        prodMode: true,
      }),
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: translocoStorybookInitializer,
      multi: true,
      deps: [TranslocoService],
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        inject(BiitIconService).registerIcons(completeIconSet);
      }
    },
    provideTranslocoLocale({
      langToLocaleMapping: {
        en: "en-US",
        es: "es-ES",
        nl: "nl-NL"
      }
    })
  ]
});


const setRoutesMetadata = (fn, c) => {
  const story = fn();
  story.moduleMetadata = story.moduleMetadata || {};
  story.moduleMetadata.providers = story.moduleMetadata.providers || [];
  story.moduleMetadata.providers.push(
    {
      provide: ENVIRONMENT_INITIALIZER, multi: true, useValue() {
        inject(Router).resetConfig(c.parameters?.routes || [])
      }
    }
  )
  return story;
}

export const decorators = [
  globalAppProviders,
  globalModuleImports,
  setRoutesMetadata
];
