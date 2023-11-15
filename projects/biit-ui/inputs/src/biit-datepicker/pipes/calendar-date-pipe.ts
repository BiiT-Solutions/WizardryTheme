import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendarDate'
})

export class CalendarDatePipe implements PipeTransform {

  constructor() {
  }
  transform(date: Date): number {
    return date.getDate();
  }
}
