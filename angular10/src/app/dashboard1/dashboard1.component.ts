import { NavbarService } from './../shared/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css'],
})
export class Dashboard1Component implements OnInit {
  constructor(public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.show();
  }
}
