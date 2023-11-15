import { Pipe, PipeTransform } from '@angular/core';
import {isSameDay, isWeekend} from "date-fns";

@Pipe({
  name: 'isDisabled'
})

export class IsDisabledPipe implements PipeTransform {

  constructor() {
  }
  transform(date: Date, disabledDates: Date[], disableWeekdays: boolean, disableWeekends: boolean): boolean {
    let disabled = false;

    disabledDates.forEach(target => {
      if (isSameDay(date, target)) {
        disabled = true;
      }
    });

    if (disableWeekdays && !isWeekend(date)) {
      disabled = true;
    }
    if (disableWeekends && isWeekend(date)) {
      disabled = true;
    }

    return disabled;
  }
}
