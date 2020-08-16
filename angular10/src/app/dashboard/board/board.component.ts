import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor(private router: Router) {
    
  }
  ngOnInit(): void {


   //this.router.navigate(['/product']);
  }
}
