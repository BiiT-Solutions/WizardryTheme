import {HttpClientModule} from '@angular/common/http';
import {TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig, TranslocoModule} from '@ngneat/transloco';
import {isDevMode, NgModule} from '@angular/core';
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from "./supported-languages";
import {TranslocoHttpLoader} from "./http-loader";
import {provideTranslocoLocale, TRANSLOCO_LOCALE_CONFIG} from "@ngneat/transloco-locale";

@NgModule({
  exports: [ TranslocoModule ],
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: SUPPORTED_LANGUAGES.map(lang => lang.code),
        defaultLang: DEFAULT_LANGUAGE.code,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        fallbackLang: DEFAULT_LANGUAGE.code,
        missingHandler: {
          useFallbackTranslation: true
        }
      })
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
  ]
})
export class TranslocoRootModule {}
