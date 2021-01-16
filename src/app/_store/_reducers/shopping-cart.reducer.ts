import { Product } from '../../Models/product';
import * as ShoppingCartActions from '../_actions/shopping-cart.actions';

export interface State {
  shoppingCartProducts: Product[];
  TotalItems: number;
  Total: number;
}
export interface AppState {
  shoppingCart: State;
}

const initialState: State = {
  shoppingCartProducts: [],
  TotalItems: 0,
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
          TotalItems: state.TotalItems + 1,
          Total: state.Total + +_newProduct.product.price,
        };
      } else {
        return {
          ...state,
          shoppingCartProducts: [...state.shoppingCartProducts, _newProduct],
          TotalItems: state.TotalItems + 1,
          Total: state.Total + +_newProduct.product.price,
        };
      }

    case ShoppingCartActions.UPDATE_SHOPPING_CART_PRODUCT:
      const product = state.shoppingCartProducts[action.payload.index];
      let _totalItems = state.TotalItems;
      let _total = state.Total;
      let newQtt = product.qtt;
      if (action.payload.action === '+') {
        newQtt++;
        _totalItems = _totalItems + 1;
        _total = _total + +product.product.price;
      } else {
        newQtt--;
        _totalItems = _totalItems - 1;
        _total = _total - +product.product.price;
      }

      const updatedProduct: Product = {
        ...product,
        qtt: newQtt,
        total: newQtt * +product.product.price,
      };

      const updatedProducts = [...state.shoppingCartProducts];
      updatedProducts[action.payload.index] = updatedProduct;

      return {
        ...state,
        shoppingCartProducts: updatedProducts,
        TotalItems: _totalItems,
        Total: _total,
      };

    case ShoppingCartActions.DELETE_SHOPPING_CART_PRODUCT:
      const deleteProduct = state.shoppingCartProducts.filter(
        (product, index) => {
          return index == action.payload;
        }
      );
      return {
        ...state,
        shoppingCartProducts: state.shoppingCartProducts.filter(
          (product, index) => {
            return index !== action.payload;
          }
        ),
        TotalItems: state.TotalItems - deleteProduct[0].qtt,
        Total: state.Total - deleteProduct[0].total,
      };

    case ShoppingCartActions.LOAD_SHOPPING_CART_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    case ShoppingCartActions.CHECKOUT_SHOPPING_CART_PRODUCT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
