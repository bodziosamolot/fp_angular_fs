import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { map, tap } from 'rxjs/operators';
import { firestore } from 'firebase';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts$(start: number, limit: number, nameOrDescriptionFilter: string = '', categoryFilter: string = ''): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`, {
      params: {
        _page: start.toString(),
        _limit: limit.toString(),
        name_like: nameOrDescriptionFilter || '',
        description_like: nameOrDescriptionFilter || '',
        category_like: categoryFilter || ''
      }
    }).pipe(
      map(response => response.map(x => {
        return {
          name: x.name,
          description: x.description,
          type: x.type,
          imageAddress: x.avatar,
          id: x.id,
          isActive: x.isActive,
          price: x.price,
          created: x.created
        }
      }))
    );
  }

  getProduct$(id: string): Observable<Product> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`, {
      params: {
        id_like: id.toString()
      }
    }).pipe(
      map(response => response.map(x => {
        return {
          name: x.name,
          description: x.description,
          type: x.type,
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
