import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, switchMap, first } from 'rxjs/operators';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';
import { debug } from 'util';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productDetails$: Observable<any>;

  constructor(public activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.productDetails$ = this.activatedRoute.params.pipe(
      switchMap(x => {
        return this.productsService.getProduct$(x.id);
      }),
      first(),
      map(products => products[0]),
    );
  }

}
