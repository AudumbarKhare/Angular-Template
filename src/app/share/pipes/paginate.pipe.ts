import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(data: any[] | undefined, options: { itemsPerPage: number; currentPage: number } = { itemsPerPage: 10, currentPage: 1 }): any[] {

    if (!data) {
      return [];
    }

    const { itemsPerPage = 10, currentPage = 1 } = options;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

}
