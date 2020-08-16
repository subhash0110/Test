import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }

  ngOnInit(): void {}
}
