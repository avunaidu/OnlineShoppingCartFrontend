import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AddCartComponent } from './cart/view-allcarts/add-cart.component';
import { CartComponent } from './cart/carts/cart.component';
import { HomeComponent } from './cart/home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTocartComponent } from './cart/addtocart/add-tocart.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './Services/jwt.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductListComponent,
    HomeComponent,
  
    CartComponent,
       AddCartComponent,
       HomepageComponent,
       NavbarComponent,
       AddTocartComponent,
       RegistrationComponent,
       LoginComponent,
       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [JwtInterceptor],

  bootstrap: [AppComponent]
})
export class AppModule { }
