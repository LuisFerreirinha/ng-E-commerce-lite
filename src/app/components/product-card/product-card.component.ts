import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IpopUp } from 'src/app/Models/IPopUp';
import { IProduct } from 'src/app/Models/IProducts';
import { Product } from 'src/app/Models/product';
import { PopUpService } from 'src/app/_services/pop-up.service';
import * as fromShoppingCart from '../../_store/_reducers/shopping-cart.reducer';

import * as shoppingCartActions from '../../_store/_actions/shopping-cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  loadingImg = true;
  spinner = false;
  timer = null;
  @Input() product: IProduct;
  constructor(
    private popupService: PopUpService,
    private store: Store<fromShoppingCart.AppState>
  ) {}

  ngOnInit() {}

  buy() {
    if (!this.timer) {
      this.spinner = true;
      // this.productService.sendProduct(this.product);
      this.timer = setTimeout(() => {
        const _product = new Product(this.product);
        this.store.dispatch(
          new shoppingCartActions.AddShoppingCartProduct(_product)
        );
        const popup: IpopUp = {
          message: `Product ref: ${this.product.id} added!`,
          timer: 3,
          type: 'success',
        };
        this.popupService.addPopup(popup);

        this.spinner = false;
        this.timer = null;
      }, 1000);
    }
  }
}
