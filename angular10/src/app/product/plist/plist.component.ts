import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {

  categories$: any = [];
  @Input('category') category;

  constructor(categoryService: CategoryService) {

    categoryService.getAll().subscribe(
      (data) => {
        this.categories$.push(data)
      },
      (err) => console.error(err),
      () => console.log('getBooks completed')
    );
  }


  ngOnInit(): void {
  }

}
