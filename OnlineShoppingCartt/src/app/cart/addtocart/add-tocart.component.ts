import { Component } from '@angular/core';
import { Cart, CartService } from 'src/app/Services/cartService';
import { CartItem } from 'src/app/model/cartItem';

@Component({
  selector: 'app-add-tocart',
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent {
  cartId!: number;
  productId!: number;
  constructor(private cartService: CartService) { }
  // addToCart() {
  //   this.cartService.addProductToCart(this.cartId, this.productId).subscribe((response) => {
  //     console.log('Item added to cart', response);         // Handle success, e.g., show a success message or update the UI      },       (error) => {         console.error('Error adding item to cart', error);         // Handle error, e.g., display an error message      }     );   } }

  //   },
  //     (error) => {
  //       console.error('Error adding item to cart', error);         // Handle error, e.g., display an error message      }     );   } } 
  //     }
  //   );}}







  addToCart() { 
      // Log the productId before making the API call 
       console.log('ProductId:', this.productId);   // Call the cart service to add the item to the cart 
        this.cartService.addProductToCart(this.cartId, this.productId).subscribe(     (cart) => {       console.log('Item added to cart', cart);   
            // Handle the updated cart object here  
            },    
             (error) => {       console.error('Error adding item to cart', error);     }   ); 
            }
          }