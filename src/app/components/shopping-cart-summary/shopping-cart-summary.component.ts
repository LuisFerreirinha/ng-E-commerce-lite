import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IpopUp } from 'src/app/Models/IPopUp';
import { PopUpService } from 'src/app/_services/pop-up.service';
import * as fromShoppingCart from '../../_store/_reducers/shopping-cart.reducer';
import * as ShoppingCartActions from '../../_store/_actions/shopping-cart.actions';
@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css'],
})
export class ShoppingCartSummaryComponent implements OnInit, OnDestroy {
  totalItems;
  total;
  subscription: Subscription;
  constructor(
    private store: Store<fromShoppingCart.AppState>,
    private popupService: PopUpService
  ) {}

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingCart').subscribe((store) => {
      this.total = store.Total;
      this.totalItems = store.TotalItems;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  chekout() {
    this.store.dispatch(new ShoppingCartActions.CheckoutShoppingCart());
    const popup: IpopUp = {
      message: `Thank you for shopping with us!`,
      timer: 3,
      type: 'info',
    };
    this.popupService.addPopup(popup);
  }
}
