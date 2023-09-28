import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cartService';
import { HomeService } from 'src/app/Services/homeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList: any;
  public filteredProductList: any;
  searchKey: string = "";

  constructor(private homeservice: HomeService, private cartservice: CartService,private router:Router) {}

  ngOnInit(): void {
    this.homeservice.getAllProduct()
      .subscribe((res: any) => {
        this.productList = res;

        // To show quantity and price 
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });

        // Initialize filtered product list
        this.filteredProductList = this.productList;
      });

    this.cartservice.search.subscribe((val: any) => {
      this.searchKey = val;
      this.filterProductList();
    });
  }

  addtocart(item: any) {
    this.cartservice.addtoCart(item);
    this.router.navigate(['/addtocart']);

  }

  filterProductList() {
    if (this.searchKey.trim() === "") {
      this.filteredProductList = this.productList;
    } else {
      this.filteredProductList = this.productList.filter((item: any) =>
        item.productName.toLowerCase().includes(this.searchKey.toLowerCase())
      );
    }
  }
}
