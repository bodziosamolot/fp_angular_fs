import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts$(start: number, limit: number, nameOrDescriptionFilter: string = '', categoryFilter: string = ''): Observable<Product[]> {
    let params: any = {
      _start: (start * limit).toString(),
      _limit: limit.toString(),
      _sort: "id",
      _order: "desc"
    }

    if (nameOrDescriptionFilter) {
      params.name_like = nameOrDescriptionFilter;
    }

    if (categoryFilter) {
      params.category_like = categoryFilter;
    }

    return this.http.get<Product[]>(`${environment.apiUrl}/products`, {
      params
    }).pipe(
      map(response => response.map((x: any) => {
        return {
          name: x.name,
          description: x.description,
          category: x.category,
          imageAddress: x.avatar,
          id: x.id,
          isActive: x.isActive,
          price: x.price,
          created: x.created
        }
      }))
    );
  }

  addProduct$(prodct: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, prodct);
  }

  updateProduct$(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/products/${product.id}`, product);
  }

  deleteProduct$(id: string): Observable<Product> {
    return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`);
  }

  getProduct$(id: string): Observable<Product> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`, {
      params: {
        id_like: id.toString()
      }
    }).pipe(
      map(response => response.map((x: any) => {
        return {
          name: x.name,
          description: x.description,
          category: x.category,
          imageAddress: x.avatar,
          id: x.id,
          isActive: x.isActive,
          price: x.price,
          created: x.created
        }
      })[0])
    );
  }
}
