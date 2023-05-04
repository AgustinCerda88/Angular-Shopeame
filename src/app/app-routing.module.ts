import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'gestion',
    component: GestionPageComponent,
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'products/:id',
    component: ProductsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
