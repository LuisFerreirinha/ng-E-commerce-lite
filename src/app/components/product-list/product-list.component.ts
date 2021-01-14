import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/Models/product';
import * as shoppingCartActions from '../../_store/_actions/shopping-cart.actions';
import * as fromShoppingCart from '../../_store/_reducers/shopping-cart.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;
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
