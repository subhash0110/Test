import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private auth: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.auth.login();
  }
}
