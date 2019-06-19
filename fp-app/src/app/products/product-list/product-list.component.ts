import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { ProductsService } from 'src/app/products.service';
import { interval, Observable } from 'rxjs';
import { startWith, tap, filter, map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { PageEvent } from '@angular/material';
import { ProductFilter } from 'src/app/models/productFilter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public pageSize: number = 10;
  public products$: Observable<Product[]>;
  public page: number = 0;
  @ViewChildren(ProductListItemComponent) productComponents: QueryList<ProductListItemComponent>

  // MatPaginator Inputs
  length = 100;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  filter: ProductFilter = new ProductFilter('', '');

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getProducts$(5, this.pageSize);
  }

  ngOnInit() {

  }

  updateProducts() {
    this.products$ = this.productsService.getProducts$(this.page, this.pageSize).pipe(
      map(products => products.filter(product => {
        return (this.filter.nameAndDescriptionFilter.length===0 || product.description.includes(this.filter.nameAndDescriptionFilter) || product.name.includes(this.filter.nameAndDescriptionFilter))
          && (this.filter.categoryName.length===0 || product.type === this.filter.categoryName);
      })),
    );
  }

  onFilterChanged(filter) {
    this.filter = filter;
    this.updateProducts();
  }

  getNewPage(page: PageEvent) {
    this.pageSize = page.pageSize;
    this.page = page.pageIndex;
    this.updateProducts();
  }

}
