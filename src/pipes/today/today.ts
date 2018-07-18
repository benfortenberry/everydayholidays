import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'today',
})
export class TodayPipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items) return [];

    return items.filter(it => {
      return it.date == moment().format("MMMM D");

    });
  }
}
