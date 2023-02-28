import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiiTFilterComponent} from "./biit-filter.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {I18nModule} from "../../../../../src/app/i18n/i18n.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [BiiTFilterComponent],
  exports: [BiiTFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    I18nModule,
    BrowserAnimationsModule
  ]
})
export class BiitFilterModule {
}
