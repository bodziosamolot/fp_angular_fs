import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';
import { interval, Observable } from 'rxjs';
import { concatMap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = interval(300 * 1000).pipe(
      startWith(this.getRandomInt()),
      map(() => this.getRandomInt()),
      concatMap(x => this.productsService.getProducts$(x, 3))
    );
  }

  ngOnInit() {
  }

  getRandomInt() {
    return Math.floor(Math.random() * 10)
  }
}
