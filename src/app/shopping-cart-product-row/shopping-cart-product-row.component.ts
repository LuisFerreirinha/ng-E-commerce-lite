import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'tr[app-shopping-cart-product-row]',
  templateUrl: './shopping-cart-product-row.component.html',
  styleUrls: ['./shopping-cart-product-row.component.css'],
})
export class ShoppingCartProductRowComponent implements OnInit {
  loadingImg = true;
  @Input() product: Product;
  constructor() {}

  ngOnInit(): void {}
}
