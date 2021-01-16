import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as shoppingCartActions from '../../_store/_actions/shopping-cart.actions';
import * as fromShoppingCart from '../../_store/_reducers/shopping-cart.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  shoppingCartProducts: number;
  subscription: Subscription;
  constructor(private store: Store<fromShoppingCart.AppState>) {}

  ngOnInit(): void {
    this.loadSate();

    this.subscription = this.store.select('shoppingCart').subscribe((p) => {
      this.shoppingCartProducts = p.TotalItems;
    });
  }

  loadSate() {
    const localSate: fromShoppingCart.State = JSON.parse(
      localStorage.getItem('shoppingCart')
    );

    if (localSate) {
      this.store.dispatch(
        new shoppingCartActions.LoadShoppingCartProducts(localSate)
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
