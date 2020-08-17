import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/product']);
  }
}
