import { Action } from '@ngrx/store';
import { Product } from 'src/app/Models/product';
import { State } from '../_reducers/shopping-cart.reducer';

export const LOAD_SHOPPING_CART_PRODUCTS = 'LOAD_SHOPPING_CART_PRODUCTS';
export const ADD_SHOPPING_CART_PRODUCT = 'ADD_SHOPPING_CART_PRODUCT';
export const UPDATE_SHOPPING_CART_PRODUCT = 'UPDATE_SHOPPING_CART_PRODUCT';
export const DELETE_SHOPPING_CART_PRODUCT = 'DELETE_SHOPPING_CART_PRODUCT';
export const CHECKOUT_SHOPPING_CART_PRODUCT = 'CHECKOUT_SHOPPING_CART_PRODUCT';

export class AddShoppingCartProduct implements Action {
  readonly type = ADD_SHOPPING_CART_PRODUCT;

  constructor(public payload: Product) {}
}

export class UpdateShoppingCartProduct implements Action {
  readonly type = UPDATE_SHOPPING_CART_PRODUCT;

  constructor(
    public payload: { index: number; product: Product; action: string }
  ) {}
}

export class DeleteShoppingCartProduct implements Action {
  readonly type = DELETE_SHOPPING_CART_PRODUCT;

  constructor(public payload: number) {}
}

export class LoadShoppingCartProducts implements Action {
  readonly type = LOAD_SHOPPING_CART_PRODUCTS;

  constructor(public payload: State) {}
}

export class CheckoutShoppingCart implements Action {
  readonly type = CHECKOUT_SHOPPING_CART_PRODUCT;
}

export type ShoppingCartActions =
  | AddShoppingCartProduct
  | UpdateShoppingCartProduct
  | DeleteShoppingCartProduct
  | LoadShoppingCartProducts
  | CheckoutShoppingCart;
