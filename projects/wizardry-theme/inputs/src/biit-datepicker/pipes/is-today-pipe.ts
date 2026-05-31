import { Pipe, PipeTransform } from '@angular/core';
import {isToday} from "date-fns";

@Pipe({
    name: 'isToday',
    standalone: false
})

export class IsTodayPipe implements PipeTransform {

  constructor() {
  }
  transform(date: Date): boolean {
    return isToday(date);
  }
}
