import { Component } from '@angular/core';
import { MaterialImports } from 'src/app/shared/modules/material.imports';
import { CartStore } from 'src/app/shared/stores/cart.store';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    ...MaterialImports,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  count = this.cartStore.itemCount;
  total = this.cartStore.totalAmount;
  allCartItems = this.cartStore.cartItems;

  constructor(
    private cartStore: CartStore,
  ) {}

  remove(id: number) {
    this.cartStore.removeFromCart(id);
  }

  clear() {
    this.cartStore.clearCart();
  }

}
