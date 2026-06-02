import { computed, effect, Injectable, signal } from "@angular/core";
import { CartItem, Product } from "../interfaces/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartStore {

    cartItems = signal<CartItem[]>([]);
    itemCount = computed(() => this.cartItems().reduce((count, item) => count + item.quantity, 0));
    totalAmount = computed(() => this.cartItems().reduce((total, item) => total + (item.price * item.quantity), 0));

    constructor() {
        effect(() => {
            console.log('Cart changed', this.cartItems());
        });
    }

    addToCart(product: Product) {
        this.cartItems.update(items => {
            const existingItem = items.find(item => item.id === product.id);
            if(existingItem) {
                return items.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [
                ...items,
                {...product, quantity: 1}
            ];
        });
    }

    removeFromCart(productId: number) {
        this.cartItems.update(items => {
            const existingItem = items.find(item => item.id === productId);
            if(existingItem && existingItem.quantity > 1) {
                return items.map(item => item.id === productId ? {...item, quantity: item.quantity - 1} : item);
            }
            return items.filter(item => item.id !== productId);
        });
    }

    clearCart() {
        this.cartItems.set([]);
    }
}