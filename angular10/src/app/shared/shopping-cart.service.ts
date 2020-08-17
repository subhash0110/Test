import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  getCart(): Observable<any> {
    return of([]);
  }

  constructor() {}
}
