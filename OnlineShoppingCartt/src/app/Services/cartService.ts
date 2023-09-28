import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    private baseUrl = 'http://localhost:3333/cart'; // Replace with your backend API URL
    public cartItemList:any=[];
    public productList=new BehaviorSubject<any>([]) ;
  
    public search=new BehaviorSubject<string>("") ;
    constructor(private http: HttpClient) {}
    getprdt(){
      return this.productList.asObservable();
    }
    setprdt(product:any){
      this.cartItemList.push(...product)
      this.productList.next(product);
    }
    addtoCart(product:any){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
  
      console.log(this.cartItemList);
    } 
    getTotalPrice():number{
      let grandTotal=0;
      this.cartItemList.map((a:any)=>{
          grandTotal+=a.total;
      })
      return grandTotal;
    }
    removeCartItem(product:any){
      this.cartItemList.map((a:any,index:any)=>{
        if(product.productId===a.productId){
          this.cartItemList.splice(index,1);
        }
      })
      //afetr removing particular product from cart ..no must decrease at carticon
      this.productList.next(this.cartItemList); 
    }
  
    removeAllCart(){
      this.cartItemList=[];
      this.productList.next(this.cartItemList);
    }
  
  
  
    getAllCarts(): Observable<Cart[]> {
      return this.http.get<Cart[]>(`${this.baseUrl}/getallcarts`);
    }
  
    addProductToCart(cartId: number, productId: number): Observable<Cart> {
      return this.http.post<Cart>(
        `${this.baseUrl}/addingproducttocart/${cartId}/${productId}`,
        {}
      );
    }
  
    getCartById(cartId: number): Observable<Cart> {
      return this.http.get<Cart>(`${this.baseUrl}/${cartId}`);
    }
  
    deleteCartItem(cartId: number, productId: number): Observable<Cart> {
      return this.http.put<Cart>(
        `${this.baseUrl}/delete/item/${productId}/${cartId}`,
        {}
      );
    }
  
    decreaseItem(productId: number, cartId: number): Observable<Cart> {
      return this.http.put<Cart>(
        `${this.baseUrl}/decreaseQuant/${productId}/${cartId}`,
        {}
      );
    }
  
    deleteCart(cartId: number): Observable<string> {
      return this.http.delete(`${this.baseUrl}/delete/${cartId}`,{responseType:'text'});
    }
  }
  
  
  export interface Cart {
    cartId: number;
    items: Items[];
    totalPrice: number;
  }
  
  export interface Items {
    productId: number;
    price: number;
    productName: string;
    quantity: number;
    image: string;
  } 