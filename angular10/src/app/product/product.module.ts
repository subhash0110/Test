import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PlistComponent } from './plist/plist.component';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [PlistComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
