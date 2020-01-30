import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'node_modules/moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(date: any, format: string, fixTimezone: boolean): any {
    moment.locale('de');

    if (fixTimezone) {
      const fixedDate = new Date(date);
      fixedDate.setTime(fixedDate.getTime() - 1 * 60 * 60 * 1000);

      return moment(fixedDate).format(format);
    } else {
      return moment(date).format(format);
    }
  }

}
