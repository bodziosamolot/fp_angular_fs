import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './models/product';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts$(limit: number): Observable<Product> {
    return this.http.get<any[]>(`${apiUrl}/products:`, {
      observe: 'response',
      params: {
        _limit: limit.toString()
      }
    }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body.map(product => {
          const newProduct = new Product();
          newProduct.name = product.name;
          newProduct.description = product.description;
          newProduct.imageAddress = product.avatar;
          return newProduct;
        });
      })
    );
  }
}
