import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'node_modules/moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(date: string, format: string, fixTimezone: boolean): any {
    moment.locale('de');

    //if (fixTimezone) {
    //  const today = new Date();
    //  const offset = today.getTimezoneOffset() * 60 * 1000;
    //  const fixedDate = new Date(date);
    //  fixedDate.setTime(fixedDate.getTime() - offset);

    //  return moment(fixedDate).format(format);
    //} else {
    if (date) {
      return moment(date.substring(0, date.length - 1)).format(format);
    } else {
      return '-';
    }
     // remove the wrong Z for UTC
    //}
  }

}
