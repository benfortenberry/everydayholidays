import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';


@Pipe({
  name: 'today',
})
export class TodayPipe implements PipeTransform {

  transform(items: any[], plusMinus: number): any[] {
    if (!items) return [];

    return items.filter(it => {
      return it.date == moment().add(plusMinus, 'd').format("MMMM D");

    });
  }
}
