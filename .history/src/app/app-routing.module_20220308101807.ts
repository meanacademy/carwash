import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
