import { Component, Input, OnInit } from '@angular/core';
import { IpopUp } from 'src/app/Models/IPopUp';
import { IProduct } from 'src/app/Models/IProducts';
import { PopUpService } from 'src/app/_services/pop-up.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  spinner = false;
  timer = null;
  @Input() product: IProduct;
  constructor(private popupService: PopUpService) {}

  ngOnInit() {}

  buy() {
    if (!this.timer) {
      this.spinner = true;
      // this.productService.sendProduct(this.product);
      this.timer = setTimeout(() => {
        const popup: IpopUp = {
          message: `Product ${this.product.id} added!`,
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
