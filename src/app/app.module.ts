import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from '@biit-solutions/wizardry-theme/i18n';
import {TranslocoModule} from "@ngneat/transloco";
import {BiitSnackbarService} from '@biit-solutions/wizardry-theme/info';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  exports: [TranslocoModule],
  providers: [BiitSnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
