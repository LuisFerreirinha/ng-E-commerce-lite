import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../Models/product';
import * as fromShoppingCart from '../../_store/_reducers/shopping-cart.reducer';
import * as shoppingCartActions from '../../_store/_actions/shopping-cart.actions';

@Component({
  selector: 'tr[app-shopping-cart-product-row]',
  templateUrl: './shopping-cart-product-row.component.html',
  styleUrls: ['./shopping-cart-product-row.component.css'],
})
export class ShoppingCartProductRowComponent implements OnInit {
  loadingImg = true;
  @Input() index: number;
  @Input() product: Product;
  constructor(private store: Store<fromShoppingCart.AppState>) {}

  ngOnInit(): void {}

  addItem() {
    this.store.dispatch(
      new shoppingCartActions.UpdateShoppingCartProduct({
        index: this.index,
        product: this.product,
        action: '+',
      })
    );
  }

  removeItem() {
    if (this.product.qtt == 1) {
      this.deleteItem();
    } else {
      this.store.dispatch(
        new shoppingCartActions.UpdateShoppingCartProduct({
          index: this.index,
          product: this.product,
          action: '-',
        })
      );
    }
  }

  deleteItem() {
    this.store.dispatch(
      new shoppingCartActions.DeleteShoppingCartProduct(this.index)
    );
  }
}
