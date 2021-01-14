import { Action } from '@ngrx/store';
import { Product } from 'src/app/Models/product';

export const ADD_SHOPPING_CART_PRODUCT = 'ADD_SHOPPING_CART_PRODUCT';
export const UPDATE_SHOPPING_CART_PRODUCT = 'UPDATE_SHOPPING_CART_PRODUCT';
export const DELETE_SHOPPING_CART_PRODUCT = 'DELETE_SHOPPING_CART_PRODUCT';

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

export type ShoppingCartActions =
  | AddShoppingCartProduct
  | UpdateShoppingCartProduct
  | DeleteShoppingCartProduct;
