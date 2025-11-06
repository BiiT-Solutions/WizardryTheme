import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitDatePickerComponent} from "./biit-datepicker.component";
import {BiitButtonModule, BiitIconButtonModule} from "wyzardry-theme/button";
import {MonthSelectorLabelPipe} from "./pipes/month-selector-label-pipe";
import {IsTodayPipe} from "./pipes/is-today-pipe";
import {OutOfMonthPipe} from "./pipes/out-of-month-pipe";
import {CalendarDatePipe} from "./pipes/calendar-date-pipe";
import {IsSameDayPipe} from "./pipes/is-same-day-pipe";
import {IsDisabledPipe} from "./pipes/is-disabled-pipe";
import {TranslocoRootModule} from "wyzardry-theme/i18n";
import {LocalizedDatePipeModule} from "wyzardry-theme/utils";
import {TranslocoDatePipe} from "@ngneat/transloco-locale";
import {BiitIconModule} from "wyzardry-theme/icon";

@NgModule({
  declarations: [
    BiitDatePickerComponent,
    MonthSelectorLabelPipe,
    CalendarDatePipe,
    OutOfMonthPipe,
    IsTodayPipe,
    IsSameDayPipe,
    IsDisabledPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconButtonModule,
    BiitButtonModule,
    TranslocoRootModule,
    LocalizedDatePipeModule,
    TranslocoDatePipe,
    BiitIconModule
  ],
  exports: [
    BiitDatePickerComponent
  ]
})
export class BiitDatePickerModule { }
