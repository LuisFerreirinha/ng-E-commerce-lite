import { Product } from '../../Models/product';
import * as ShoppingCartActions from '../_actions/shopping-cart.actions';

export interface State {
  shoppingCartProducts: Product[];
  Total: number;
}
export interface AppState {
  shoppingCart: State;
}

const initialState: State = {
  shoppingCartProducts: [],
  Total: 0,
};

export function shoppingCartReducer(
  state: State = initialState,
  action: ShoppingCartActions.ShoppingCartActions
) {
  switch (action.type) {
    case ShoppingCartActions.ADD_SHOPPING_CART_PRODUCT:
      let _newProduct = action.payload;

      const _filteredProducts = state.shoppingCartProducts.filter((p) => {
        return p.product.id == _newProduct.product.id;
      });

      if (_filteredProducts.length > 0) {
        //Product already added

        const updatedProducts = [...state.shoppingCartProducts].map((p) => {
          if (p.product.id == _newProduct.product.id) {
            return (p = {
              ...p,
              qtt: p.qtt + 1,
              total: p.total + +p.product.price,
            });
          } else {
            return p;
          }
        });
        return {
          ...state,
          shoppingCartProducts: updatedProducts,
        };
      } else {
        return {
          ...state,
          shoppingCartProducts: [...state.shoppingCartProducts, _newProduct],
        };
      }

    case ShoppingCartActions.UPDATE_SHOPPING_CART_PRODUCT:
      const product = state.shoppingCartProducts[action.payload.index];
      let newQtt = product.qtt;
      if (action.payload.action === '+') {
        newQtt++;
      } else {
        newQtt--;
      }

      const updatedProduct: Product = {
        ...product,
        qtt: newQtt,
        total: newQtt * product.product.price,
      };

      const updatedProducts = [...state.shoppingCartProducts];
      updatedProducts[action.payload.index] = updatedProduct;

      return {
        ...state,
        shoppingCartProducts: updatedProducts,
      };

    case ShoppingCartActions.DELETE_SHOPPING_CART_PRODUCT:
      return {
        ...state,
        shoppingCartProducts: state.shoppingCartProducts.filter(
          (product, index) => {
            return index !== action.payload;
          }
        ),
      };
    default:
      return state;
  }
}
