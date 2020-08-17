import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { NavbarService } from 'src/app/shared/navbar.service';

@Component({
  selector: 'plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css'],
})
export class PlistComponent implements OnInit {
  categories$: any = [];
  @Input('category') category;

  constructor(
    private categoryService: CategoryService,
    private nvSrvc: NavbarService
  ) {
    var category = this.category;
  }

  ngOnChanges(changes: SimpleChanges) {
    // Input change handling logic goes here

    if (changes) {
      var res = changes;
    }
  }

  ngOnInit(): void {
    this.nvSrvc.show();
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categories$.push(data);
      },
      (err) => console.error(err),
      () => console.log('getBooks completed')
    );
  }
}
