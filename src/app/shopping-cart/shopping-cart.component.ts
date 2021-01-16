import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import * as fromShoppingCart from '../_store/_reducers/shopping-cart.reducer';
import * as shoppingCartActions from '../_store/_actions/shopping-cart.actions';
import { flatten } from '@angular/compiler';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
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
