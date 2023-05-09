import {Injectable, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslocoRootModule } from 'biit-ui/i18n';
import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule
} from "@ngneat/transloco";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  exports: [TranslocoModule],
  providers: [{
    provide: TRANSLOCO_CONFIG,
    useValue: translocoConfig({
      availableLangs: ['en', 'es', 'nl'],
      defaultLang: 'en',
      fallbackLang: 'en',
      reRenderOnLangChange: true,
      prodMode: !isDevMode()
    })
  },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
