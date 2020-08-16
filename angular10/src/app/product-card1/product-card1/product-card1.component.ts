import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'product-card1',
  templateUrl: './product-card1.component.html',
  styleUrls: ['./product-card1.component.css']
})
export class ProductCard1Component implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor() {
    var res = this.product;
  }
  ngOnInit(): void {


  }

  addToCart() {
    // this.cartService.addToCart(this.product);
  }
}
