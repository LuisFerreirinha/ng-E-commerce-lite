import * as fromShoppingCart from './shopping-cart.reducer';
import * as shoppingCartACtions from '../_actions/shopping-cart.actions';
import { Product } from 'src/app/Models/product';

describe('ShoppingCartReducer', () => {
  describe('unknown actions', () => {
    it('should return the default state', () => {
      const { initialState } = fromShoppingCart;
      const action = new shoppingCartACtions.CheckoutShoppingCart();

      const state = fromShoppingCart.shoppingCartReducer(initialState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('Add product', () => {
    it('should add product', () => {
      const { initialState } = fromShoppingCart;

      const product: Product = new Product({
        name: 'test',
        id: 1,
        price: 10,
        photo: '',
      });

      const action = new shoppingCartACtions.AddShoppingCartProduct(product);

      const state = fromShoppingCart.shoppingCartReducer(initialState, action);

      expect(state.shoppingCartProducts[0]).toEqual(product);
    });
  });

  describe('Add duplicate product', () => {
    it('should add product', () => {
      const initialState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 1,
            total: 10,
          },
        ],
        TotalItems: 1,
        Total: 10,
      };

      const product: Product = new Product({
        name: 'test',
        id: 1,
        price: 10,
        photo: '',
      });

      const _newState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 2,
            total: 20,
          },
        ],
        TotalItems: 2,
        Total: 20,
      };

      const action = new shoppingCartACtions.AddShoppingCartProduct(product);

      const state = fromShoppingCart.shoppingCartReducer(initialState, action);

      expect(state).toEqual(_newState);
    });
  });

  describe('Update product', () => {
    it('should add 1 item and increment total to the respective product', () => {
      const initialState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 1,
            total: 10,
          },
        ],
        TotalItems: 1,
        Total: 10,
      };

      const payload = {
        index: 0,
        product: new Product({
          name: 'test',
          id: 1,
          price: 10,
          photo: '',
        }),
        action: '+',
      };

      const _newState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 2,
            total: 20,
          },
        ],
        TotalItems: 2,
        Total: 20,
      };

      const action = new shoppingCartACtions.UpdateShoppingCartProduct(payload);

      const state = fromShoppingCart.shoppingCartReducer(initialState, action);

      expect(state).toEqual(_newState);
    });
  });

  describe('Update product', () => {
    it('should remove 1 item and decrease total to the respective product', () => {
      const initialState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 2,
            total: 20,
          },
        ],
        TotalItems: 2,
        Total: 20,
      };

      const payload = {
        index: 0,
        product: {
          product: { name: 'test', id: 1, price: 10, photo: '' },
          qtt: 2,
          total: 20,
        },
        action: '-',
      };

      const _newState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 1,
            total: 10,
          },
        ],
        TotalItems: 1,
        Total: 10,
      };

      const action = new shoppingCartACtions.UpdateShoppingCartProduct(payload);

      const state = fromShoppingCart.shoppingCartReducer(initialState, action);

      expect(state).toEqual(_newState);
    });
  });

  describe('Delete product', () => {
    it('should delete the respective product', () => {
      const initialState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 1,
            total: 10,
          },
        ],
        TotalItems: 1,
        Total: 10,
      };

      const payload = 0;

      const _newState: fromShoppingCart.State = {
        shoppingCartProducts: [],
        TotalItems: 0,
        Total: 0,
      };

      const action = new shoppingCartACtions.DeleteShoppingCartProduct(payload);

      const state = fromShoppingCart.shoppingCartReducer(initialState, action);

      expect(state).toEqual(_newState);
    });
  });

  describe('Delete product', () => {
    it('should load a given state', () => {
      const initialState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 1,
            total: 10,
          },
        ],
        TotalItems: 1,
        Total: 10,
      };

      const _newState: fromShoppingCart.State = {
        shoppingCartProducts: [
          {
            product: { name: 'test', id: 1, price: 10, photo: '' },
            qtt: 1,
            total: 10,
          },
          {
            product: { name: 'test', id: 2, price: 30, photo: '' },
            qtt: 2,
            total: 60,
          },
        ],
        TotalItems: 3,
        Total: 70,
      };

      const action = new shoppingCartACtions.LoadShoppingCartProducts(
        _newState
      );

      const state = fromShoppingCart.shoppingCartReducer(initialState, action);

      expect(state).toEqual(_newState);
    });
  });
});
