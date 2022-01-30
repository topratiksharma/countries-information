import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: Array<any>, searchText: string): Array<any> {
    if (searchText) {
      values = values?.filter((c) =>
        c.name.common.toUpperCase().includes(searchText.toUpperCase())
      );
    }

    return values;
  }
}
