import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:any[],searchText:string):any {
     if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((prod: Product) => {
      return (prod.title).toLowerCase().includes(searchText)
    }
    )
  }

}
