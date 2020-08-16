import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCard1RoutingModule } from './product-card1-routing.module';
import { ProductCard1Component } from './product-card1/product-card1.component';


@NgModule({
  declarations: [ProductCard1Component],
  imports: [
    CommonModule,
    ProductCard1RoutingModule
  ]
})
export class ProductCard1Module { }
