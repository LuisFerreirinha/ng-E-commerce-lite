import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromShoppingCart from '../_store/_reducers/shopping-cart.reducer';
import * as shoppingCartActions from '../_store/_actions/shopping-cart.actions';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.css'],
})
export class ShoppingCartTableComponent implements OnInit {
  products: Observable<{ shoppingCartProducts: Product[] }>;
  loadingImg = true;

  constructor(private store: Store<fromShoppingCart.AppState>) {}

  ngOnInit(): void {
    this.products = this.store.select('shoppingCart');
  }
  addItem(index: number, product: Product) {
    this.store.dispatch(
      new shoppingCartActions.UpdateShoppingCartProduct({
        index: index,
        product: product,
        action: '+',
      })
    );
  }

  removeItem(index: number, product: Product) {
    if (product.qtt == 1) {
      this.deleteItem(index);
    } else {
      this.store.dispatch(
        new shoppingCartActions.UpdateShoppingCartProduct({
          index: index,
          product: product,
          action: '-',
        })
      );
    }
  }

  deleteItem(index: number) {
    this.store.dispatch(
      new shoppingCartActions.DeleteShoppingCartProduct(index)
    );
  }
}
