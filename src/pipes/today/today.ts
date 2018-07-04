import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the TodayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'today',
})
export class TodayPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[]): any[] {
    if (!items) return [];
    //if (!terms) return items;

    return items.filter(it => {
      return it.date == moment().format("MMMM D");
      // return it.name.toLowerCase().includes(terms); // only filter country name
    });
  }
}
