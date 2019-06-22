import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListFilterComponent } from './product-list-filter/product-list-filter.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductPaginationComponent } from './product-pagination/product-pagination.component';
import { ProductsComponent } from './products/products.component';
import { RandomProductsComponent } from './random-products/random-products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductListFilterComponent,
    ProductListItemComponent,
    ProductOverviewComponent,
    ProductPaginationComponent,
    ProductsComponent,
    RandomProductsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProductModule { }
