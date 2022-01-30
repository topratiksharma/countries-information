import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../types';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: Array<Country>, searchText: string): Array<Country> {
    if (searchText) {
      values = values?.filter((c) =>
        c.name.common.toUpperCase().includes(searchText.toUpperCase())
      );
    }

    return values;
  }
}
