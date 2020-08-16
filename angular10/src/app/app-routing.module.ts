import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import(`../app/login/login.module`).then((m) => m.LoginModule),
    // canActivate: [Dashboard1Component]
  },

  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(`../app/userinfo/userinfo.module`).then((m) => m.UserinfoModule),
  },

  {
    path: '',
    redirectTo: '/cart',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadChildren: () =>
      import(`../app/shopping-cart/shopping-cart.module`).then(
        (m) => m.ShoppingCartModule
      ),
  },

  {
    path: 'dashboard',
    component: Dashboard1Component,
  },

  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: () =>
      import(`../app/product/product.module`).then((m) => m.ProductModule),
  },

  {
    path: '',
    redirectTo: '/pcard',
    pathMatch: 'full',
  },
  {
    path: 'pcard',
    loadChildren: () =>
      import(`../app/product-card1/product-card1.module`).then(
        (m) => m.ProductCard1Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
