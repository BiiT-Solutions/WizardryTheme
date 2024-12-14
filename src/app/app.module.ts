import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from 'biit-ui/i18n';
import {TranslocoModule} from "@ngneat/transloco";
import {BiitSnackbarService} from 'biit-ui/info';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /*
    * BrowserAnimationsModule imports BrowserModule
    * This is necessary for animations to work but libraries should not import it because it will cause the application to load the module twice.
    * */
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  exports: [TranslocoModule],
  providers: [BiitSnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
