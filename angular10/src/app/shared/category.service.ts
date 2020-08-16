import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category: any = [];

  constructor() {}

  getAll(): any {
    return (this.category = [
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
    ]);
  }
}
