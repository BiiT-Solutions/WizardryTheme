import { Pipe, PipeTransform } from '@angular/core';
import {CalendarUtility} from "biit-ui/calendar";

@Pipe({
  name: 'customHeader'
})
export class CustomHeaderPipe implements PipeTransform {

  transform(date: Date, utility: CalendarUtility): string {
    return utility.customHeaderDate(date);
  }

}
