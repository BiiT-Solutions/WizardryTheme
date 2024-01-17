import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitCalendarComponent } from './biit-calendar.component';
import {TranslocoRootModule} from "biit-ui/i18n";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";


@NgModule({
  declarations: [
    BiitCalendarComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ], exports: [
    BiitCalendarComponent
  ]
})
export class BiitCalendarModule { }
