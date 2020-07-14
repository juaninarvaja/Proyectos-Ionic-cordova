import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VentanaErrorPage } from './ventana-error.page';

const routes: Routes = [
  {
    path: '',
    component: VentanaErrorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VentanaErrorPage]
})
export class VentanaErrorPageModule {}
