import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';
import { MaterialImports } from 'src/app/shared/modules/material.imports';
import { CartStore } from 'src/app/shared/stores/cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ...MaterialImports,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [
    {id: 1, name: 'Laptop', price: 50000},
    {id: 2, name: 'Phone', price: 20000},
    {id: 3, name: 'Headphones', price: 3000}
  ];

  constructor(
    private cartStore: CartStore,
  ) {}

  add(product: Product) {
    this.cartStore.addToCart(product);
  }
}
