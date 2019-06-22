import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { ProductListComponent } from './product/product-list/product-list.component';
import { RandomProductsComponent } from './product/random-products/random-products.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  { path: '', component: RandomProductsComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent },
  { path: 'products/create', component: ProductEditComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/:id/edit', component: ProductEditComponent },
  { path: 'products', component: ProductListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
