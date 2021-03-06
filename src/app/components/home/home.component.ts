import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProducts';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  error = false;
  products: IProduct[] = [];
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.fetchProducts().subscribe(
      (products) => {
        this.error = false;
        this.products = products;
      },
      (error) => {
        this.error = true;
      }
    );
  }
}
