import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


  const routes: Routes = [
    {
      path:'',
      redirectTo:'/admin',
      pathMatch:'full'
    },
    { path: 'admin', loadChildren: () => import(`../app/userinfo/userinfo.module`).then(m => m.UserinfoModule) },
    ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// UserinfoRoutingModule