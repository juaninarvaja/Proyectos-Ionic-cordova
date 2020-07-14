import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {VentanaErrorComponent} from "./page/ventana-error/ventana-error.component";
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
  import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  // { path: 'lindas', loadChildren: './page/lindas/lindas.module#LindasPageModule' },
  // { path: 'feas', loadChildren: './page/feas/feas.module#FeasPageModule' },
  { path: 'ventana-error', component: VentanaErrorComponent },
  // { path: 'list', loadChildren: './page/list/list.module#ListPageModule' }
  { path: 'list/cosasLindas', loadChildren: './page/list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'list/cosasFeas', loadChildren: './page/list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'cosas-feas', loadChildren: './page/cosas-feas/cosas-feas.module#CosasFeasPageModule' },
  { path: 'cosas-lindas', loadChildren: './page/cosas-lindas/cosas-lindas.module#CosasLindasPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
