import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/shared/category/category';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(categories: Category[]): string {
    return categories.map((category) => category.name).join(', ');
  }

}
