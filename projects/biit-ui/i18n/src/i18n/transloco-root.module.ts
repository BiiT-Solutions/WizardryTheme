import {HttpClientModule} from '@angular/common/http';
import {TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig, TranslocoModule} from '@ngneat/transloco';
import {isDevMode, NgModule} from '@angular/core';
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from "./supported-languages";
import {TranslocoHttpLoader} from "./http-loader";

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
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class TranslocoRootModule {}
