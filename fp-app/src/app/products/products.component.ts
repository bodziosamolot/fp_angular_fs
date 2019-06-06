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
    this.products$ = interval(3 * 1000).pipe(
      startWith(this.getRandomInt()),
      map(() => this.getRandomInt()),
      concatMap(x => this.productsService.getProducts$(x, 3)),
      map(products => {
        return products.map(product => {
          product.name= this.ellipsis(product.name, 25);
          product.description = this.ellipsis(product.description, 640);
          return product;
        })
      })
    );
  }

  ngOnInit() {
  }

  ellipsis(input: string, length: number) {
    return input.length > length ? input.slice(0, length) + "..." : input;
  }

  getRandomInt() {
    return Math.floor(Math.random() * 10)
  }
}
