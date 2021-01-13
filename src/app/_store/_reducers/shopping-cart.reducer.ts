import { Product } from '../../Models/product';
import * as ShoppingCartActions from '../_actions/shopping-cart.actions';

const initialState = {
  shoppingCartProducts: [
    new Product({ id: 1, name: 'mock 1', photo: '', price: 50 }),
  ],
};

export function shoppingCartReducer(
  state = initialState,
  action: ShoppingCartActions.AddShoppingCartProduct
) {
  switch (action.type) {
    case ShoppingCartActions.ADD_SHOPPING_CART_PRODUCT:
      return {
        ...state,
        shoppingCartProducts: [...state.shoppingCartProducts, action.payload],
      };

    default:
      return state;
  }
}
