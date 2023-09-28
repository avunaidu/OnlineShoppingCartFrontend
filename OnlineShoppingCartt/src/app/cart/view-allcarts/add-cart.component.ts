import { Component, OnInit } from '@angular/core';
import { Cart, CartService, Items } from 'src/app/Services/cartService';


@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  carts: Cart[] = [];
  cartId!: number;
  cartItems: Items[] = []; // Change the type to Items[]

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCarts();
  }

  loadCarts() {
    this.cartService.getAllCarts().subscribe((data) => {
      this.carts = data;
      // Modify the reduce operation to extract items
      this.cartItems = data.reduce((items: Items[], cart: Cart) => [...items, ...cart.items], []);
    });
  }

  addToCart(cartId: number, productId: number) {
    this.cartService.addProductToCart(cartId, productId).subscribe(() => {
      this.loadCarts(); // Refresh the cart data after adding a product
    });
  }

  deleteCartItem(cartId: number, productId: number) {
    this.cartService.deleteCartItem(cartId, productId).subscribe(() => {
      this.loadCarts(); // Refresh the cart data after deleting an item
    });
  }

  decreaseItem(cartId: number, productId: number) {
    this.cartService.decreaseItem(cartId, productId).subscribe(() => {
      this.loadCarts(); // Refresh the cart data after decreasing quantity
    });
  }

  deleteCart(cartId: number) {
    this.cartService.deleteCart(cartId).subscribe(() => {
      this.loadCarts();
      alert('Cart deleted successfully');
    
    }, error => {
      console.error('Error deleting cart:', error);
      alert('Failed to delete cart');
    });
  }
}
