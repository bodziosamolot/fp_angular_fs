import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RandomProductsComponent } from './random-products/random-products.component';

const routes: Routes = [
  { path: '', component: RandomProductsComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent },
  // { path: 'products/:id', component: ArticleComponent },
  { path: 'products', component: ProductListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
