import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../model/search-item.model';

@Pipe({
  name: 'findByWord',
  standalone: true,
})
export default class FindByWordPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(items: Item[], searchTerm: string): Item[] {
    if (!items || !searchTerm) return items;

    const lowerCaseTerm = searchTerm.toLowerCase();

    return items.filter((item) => item.snippet.title.toLowerCase().includes(lowerCaseTerm));
  }
}
