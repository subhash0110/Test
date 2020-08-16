import { NgModule } from '@angular/core';
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
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import(`../app/dashboard/dashboard.module`).then(
        (m) => m.DashboardModule
      ),
    
  },


  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: () =>
      import(`../app/product/product.module`).then(
        (m) => m.ProductModule
      ),
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
