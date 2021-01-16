import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get<IProduct[]>(
      'https://5ee744ce52bb0500161fd6e4.mockapi.io/products'
    );
  }
}
