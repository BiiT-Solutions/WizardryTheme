import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {moduleMetadata} from "@storybook/angular";
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from "../projects/biit-ui/i18n/src/i18n/supported-languages";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Router, RouterModule} from "@angular/router";
import {ENVIRONMENT_INITIALIZER, inject} from "@angular/core";

setCompodocJson(docJson);

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
  imports: [RouterTestingModule, RouterModule.forRoot([], {enableTracing: true}), HttpClientModule],
  providers: [Router],
});


const setRoutesMetadata = (fn, c) => {
  const story = fn();
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
  globalModuleImports,
  setRoutesMetadata
];
