import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getProducts$(start: number, limit: number): Observable<Product[]> {
    return this.db.list<Product>('products', query => query.orderByKey().startAt(`${start}`).limitToFirst(limit)).valueChanges().pipe(
      map(productFromHttp => {
        return Object.keys(productFromHttp).map(x => {
          const product = productFromHttp[x];

          if (!product) {
            return;
          }

          const newProduct = new Product();

          newProduct.name = product.name;
          newProduct.description = product.description;
          newProduct.imageAddress = product.avatar;
          newProduct.id = product.id;

          return newProduct;
        })
      })
    );
  }
}
