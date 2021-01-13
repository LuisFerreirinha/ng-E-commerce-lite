import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  products: Observable<{ shoppingCartProducts: Product[] }>;
  constructor(
    private store: Store<{ shoppingCart: { shoppingCartProducts: Product[] } }>
  ) {}

  ngOnInit(): void {
    this.products = this.store.select('shoppingCart');
  }
}
