import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PlistComponent } from './plist/plist.component';
import { ProductComponent } from './product.component';
import { NavbarService } from '../shared/navbar.service';
import { ProductCard1Component } from './product-card1/product-card1.component';


@NgModule({
  declarations: [PlistComponent, ProductComponent, ProductCard1Component],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [],
})
export class ProductModule { }
