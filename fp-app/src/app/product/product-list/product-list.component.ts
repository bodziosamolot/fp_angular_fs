import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { PageEvent } from '@angular/material';
import { ProductFilter } from 'src/app/models/productFilter';
import { ProductsService } from 'src/app/shared/products.service';

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
  length = 1000;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  filter: ProductFilter = new ProductFilter('', '');

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getProducts$(this.page, this.pageSize);
  }

  updateProducts() {
    this.products$ =
      this.productsService.getProducts$(this.page, this.pageSize, this.filter.nameAndDescriptionFilter, this.filter.categoryName)
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
