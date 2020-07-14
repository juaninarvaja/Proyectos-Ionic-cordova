import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VentanaErrorComponent } from './page/ventana-error/ventana-error.component'
import { AnimalsComponent } from './home/animals/animals.component';
import { ColorsComponent } from './home/colors/colors.component';
import { NumbersComponent } from './home/numbers/numbers.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'ventana-error', component:VentanaErrorComponent },
  {path: 'main/animals', component:AnimalsComponent},
  {path: 'main/colors', component:ColorsComponent},
  {path: 'main/numbers', component:NumbersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
