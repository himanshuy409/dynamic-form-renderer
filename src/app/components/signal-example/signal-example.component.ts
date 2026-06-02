import { Component } from '@angular/core';
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-signal-example',
  standalone: true,
  imports: [
    ProductsComponent,
    ShoppingCartComponent,
  ],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.scss'
})
export class SignalExampleComponent {
  
  constructor() {}

}
