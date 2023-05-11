import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {moduleMetadata} from "@storybook/angular";
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from "../projects/biit-ui/i18n/src/i18n/supported-languages";
import {TranslocoStorybookModule} from "../src/app/transloco/transloco-storybook.module";
import {HttpClientModule} from "@angular/common/http";

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

export const decorators = [
  // declares Angular modules which will be available for all stories
  moduleMetadata({
    imports: [TranslocoStorybookModule, HttpClientModule],
  }),
];

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
