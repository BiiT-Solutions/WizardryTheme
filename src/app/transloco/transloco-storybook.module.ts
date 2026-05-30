import { HttpClientModule } from "@angular/common/http"
import {
  DefaultTranspiler,
  provideTransloco,
  translocoConfig,
  TRANSLOCO_TRANSPILER,
  TranslocoModule, TranslocoService,
} from "@ngneat/transloco"
import {APP_INITIALIZER, NgModule} from "@angular/core"
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, TranslocoHttpLoader} from "@biit-solutions/wizardry-theme/i18n";
import {forceReRender} from "@storybook/angular";
import {distinctUntilChanged, tap} from "rxjs";
import {provideTranslocoLocale} from "@ngneat/transloco-locale";

export const translocoServiceState = { instance: null as TranslocoService | null };

/**
 * This module provides translations for Storybook.
 */
@NgModule({
  exports: [TranslocoModule],
  imports: [HttpClientModule],
  providers: [
    ...provideTransloco({
      loader: TranslocoHttpLoader,
      config: translocoConfig({
        availableLangs: SUPPORTED_LANGUAGES.map(lang => lang.code),
        defaultLang: DEFAULT_LANGUAGE.code,
        reRenderOnLangChange: true,
        missingHandler: {
          logMissingKey: false,
        },
        fallbackLang: DEFAULT_LANGUAGE.code,
        prodMode: false,
      }),
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: translocoStorybookInitializer, // our initializer hook
      multi: true,
      deps: [TranslocoService], // the dependencies that Angular passes as arguments to our hook
    },
    {
      provide: TRANSLOCO_TRANSPILER,
      useClass: DefaultTranspiler,
    },
    provideTranslocoLocale({
      langToLocaleMapping: {
        en: 'en-US',
        es: 'es-ES',
        nl: 'nl-NL'
      }
    })
  ],
})
export class TranslocoStorybookModule {
  public static setLanguage(globals: any): void {
    if (globals['language']) {
      translocoServiceState.instance?.setActiveLang(globals['language']);
    }
  }
}
export function translocoStorybookInitializer(translocoService: TranslocoService) {
  return () => {
    translocoServiceState.instance = translocoService;
    translocoService.langChanges$
      .pipe(
        distinctUntilChanged(),
        tap(() => forceReRender())
      )
      .subscribe();
  }
}
