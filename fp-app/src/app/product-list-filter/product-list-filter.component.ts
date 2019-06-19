import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductFilter } from '../models/productFilter';
import { debug } from 'util';

@Component({
  selector: 'app-product-list-filter',
  templateUrl: './product-list-filter.component.html',
  styleUrls: ['./product-list-filter.component.scss']
})
export class ProductListFilterComponent implements OnInit {

  public categories: string[] = ['electronic', 'others', 'food'];
  public filter: ProductFilter = new ProductFilter('', '');

  @Output() filterChanged: EventEmitter<ProductFilter> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nameFilterChanged($event) {
    this.filterChanged.emit(this.filter);
  }

  categoryChanged($event) {
    this.filter.categoryName = $event.value;
    this.filterChanged.emit(this.filter);
  }

}
