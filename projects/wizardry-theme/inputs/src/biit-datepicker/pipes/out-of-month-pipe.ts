import { Pipe, PipeTransform } from '@angular/core';
import {isSameMonth} from "date-fns";

@Pipe({
  name: 'outOfMonth'
})

export class OutOfMonthPipe implements PipeTransform {

  constructor() {
  }
  transform(date: Date, viewerDate: Date): any {
    return !isSameMonth(date, viewerDate);
  }
}
