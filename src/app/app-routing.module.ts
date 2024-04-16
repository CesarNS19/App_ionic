import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'dashboard-usuario',
    loadChildren: () => import('./dashboard-usuario/dashboard-usuario.module').then( m => m.DashboardUsuarioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)

  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'addproducto',
    loadChildren: () => import('./addproducto/addproducto.module').then( m => m.AddproductoPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'addproducto',
    loadChildren: () => import('./addproducto/addproducto.module').then( m => m.AddproductoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
