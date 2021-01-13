import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProducts';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  spinner = false;
  @Input() product: IProduct;
  constructor() {}

  ngOnInit() {}

  buy() {
    this.spinner = true;
    // this.productService.sendProduct(this.product);
    setTimeout(() => {
      this.spinner = false;
    }, 1000);
  }
}
