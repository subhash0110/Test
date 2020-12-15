import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Emp1Service {
  getEmployees(): Observable<any> {
    return of([]);
  }

  constructor() {}
}
