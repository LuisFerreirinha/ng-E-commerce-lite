import { IProduct } from './IProducts';

export class Product {
  qtt: number = 0;
  total: number = 0;

  constructor(public product: IProduct) {
    this.qtt++;
    this.total = this.qtt * this.product.price;
    // this.Total();
  }

  // Total() {
  //   this.total = this.qtt * this.product.price;
  // }

  // addItem() {
  //   this.qtt++;
  //   this.Total();
  // }
}
