import { Action } from '@ngrx/store';
import { Product } from 'src/app/Models/product';

export const ADD_SHOPPING_CART_PRODUCT = 'ADD_SHOPPING_CART_PRODUCT';

export class AddShoppingCartProduct implements Action {
  readonly type = ADD_SHOPPING_CART_PRODUCT;

  constructor(public payload: Product) {}
}
