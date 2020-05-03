import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], terms: string, exact: boolean): any[] {
    if (!items) return [];
    if (!terms) return items;

    terms = terms.toLowerCase();
    return items.filter(it => {

      if (exact) {
        return it.name.toLowerCase() == terms;
      }
      else {

        return (it.name.toLowerCase().includes(terms) && it.date) ||
          (it.date.toLowerCase().includes(terms) && it.date);
      }

    });
  }
}
