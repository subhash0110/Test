import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category: any = [];

  constructor() {}

  getAll(): any {
    return of(
      (this.category = [
        {
          name: 'Bread',
        },
        {
          name: 'Dairy',
        },
        {
          name: 'Fruits',
        },
        {
          name: 'Seasonings',
        },
        {
          name: 'Vegetables',
        },
      ])
    );
  }
}
