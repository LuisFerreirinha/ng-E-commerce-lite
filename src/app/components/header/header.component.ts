import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/product';
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
    this.subscription = this.store.select('shoppingCart').subscribe((p) => {
      this.shoppingCartProducts = p.TotalItems;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
