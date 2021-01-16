import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromShoppingCart from '../_reducers/shopping-cart.reducer';
import * as shoppingCartActions from '../_actions/shopping-cart.actions';
import { tap, withLatestFrom } from 'rxjs/operators';
@Injectable()
export class shoppingCartEffects {
  @Effect({ dispatch: false })
  shoppingCartAddProduct = this.actions$.pipe(
    ofType(
      shoppingCartActions.ADD_SHOPPING_CART_PRODUCT,
      shoppingCartActions.UPDATE_SHOPPING_CART_PRODUCT,
      shoppingCartActions.DELETE_SHOPPING_CART_PRODUCT
    ),
    withLatestFrom(this.store$.select('shoppingCart')),
    tap((data) => {
      localStorage.setItem('shoppingCart', JSON.stringify(data[1]));
    })
  );

  constructor(
    private actions$: Actions,
    private store$: Store<fromShoppingCart.AppState>
  ) {}
}
