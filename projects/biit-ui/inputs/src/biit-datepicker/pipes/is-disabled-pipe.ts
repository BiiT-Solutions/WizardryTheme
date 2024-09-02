import { Pipe, PipeTransform } from '@angular/core';
import {isSameDay, isWeekend} from "date-fns";

@Pipe({
  name: 'isDisabled'
})

export class IsDisabledPipe implements PipeTransform {

  constructor() {
  }
  transform(date: Date, disabledDates: Date[], disableWeekdays: boolean, disableWeekends: boolean, min: Date, max: Date): boolean {
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

    if (min && date.getTime() < min.getTime()) disabled = true;
    if (max && date.getTime() > max.getTime()) disabled = true;

    return disabled;
  }
}
