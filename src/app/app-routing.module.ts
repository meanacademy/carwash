import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => 
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path:'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
