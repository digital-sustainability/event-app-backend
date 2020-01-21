import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'node_modules/moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(date: any, format: string): any {
    moment.locale('de');
    return moment(date).format(format);
  }

}
