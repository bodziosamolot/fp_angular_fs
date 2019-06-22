import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Product } from '../../models/product';
import { interval, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'random-products',
  templateUrl: './random-products.component.html',
  styleUrls: ['./random-products.component.scss']
})
export class RandomProductsComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = interval(3 * 1000).pipe(
      startWith(this.getRandomInt()),
      map(() => this.getRandomInt()),
      switchMap(x => {
        return this.productsService.getProducts$(x, 3);
      }),
      map(products => {
        return products.filter(product=>!!product).map(product => {
          // product.name= this.ellipsis(product.name, 20);
          // product.description = this.ellipsis(product.description, 640);
          return product;
        })
      })
    );
  }

  ngOnInit() {
  }

  getRandomInt() {
    return Math.floor(Math.random() * 10)
  }
}
