import { HttpClientModule } from "@angular/common/http"
import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule, TranslocoService,
} from "@ngneat/transloco"
import {APP_INITIALIZER, NgModule} from "@angular/core"
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, TranslocoHttpLoader} from "wyzardry-theme/i18n";
import {forceReRender} from "@storybook/angular";
import {distinctUntilChanged, tap} from "rxjs";
import {provideTranslocoLocale, TRANSLOCO_LOCALE_CONFIG} from "@ngneat/transloco-locale";

export let translocoServiceInstance: TranslocoService | null = null;

/**
 * This module provides translations for Storybook.
 */
@NgModule({
  exports: [TranslocoModule],
  imports: [HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translocoStorybookInitializer, // our initializer hook
      multi: true,
      deps: [TranslocoService], // the dependencies that Angular passes as arguments to our hook
    },
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: SUPPORTED_LANGUAGES.map(lang => lang.code),
        defaultLang: DEFAULT_LANGUAGE.code,
        reRenderOnLangChange: true,
        missingHandler: {
          logMissingKey: false,
        },
        fallbackLang: DEFAULT_LANGUAGE.code,
        prodMode: false,
      }),
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader
    },
    {
      provide: TRANSLOCO_LOCALE_CONFIG,
      useFactory: provideTranslocoLocale
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
      // TODO: get reference to the TranslocoService instance
      translocoServiceInstance?.setActiveLang(globals['language']);
    }
  }
}
export function translocoStorybookInitializer(translocoService: TranslocoService) {
  return () => {
    // stores the reference to the service
    translocoServiceInstance = translocoService;
    translocoService.langChanges$
      .pipe(
        distinctUntilChanged(),
        tap(() => forceReRender())
      )
      .subscribe();
  }
}
