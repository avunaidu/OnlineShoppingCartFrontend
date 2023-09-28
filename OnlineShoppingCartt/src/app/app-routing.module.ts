import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './Product/add-product/add-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { ProductListComponent } from './Product/product-list/product-list.component';

import { AddCartComponent } from './cart/view-allcarts/add-cart.component';
import { CartComponent } from './cart/carts/cart.component';
import { HomeComponent } from './cart/home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddTocartComponent } from './cart/addtocart/add-tocart.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'homepage',component:HomepageComponent},
{path:'product-list',component:ProductListComponent},
{path:'product-list/product-create',component:AddProductComponent},
{path:'product-list/product-update/:productId',component:UpdateProductComponent},
{path:'cart',component:CartComponent},
{path:'add-cart',component:AddCartComponent},
{path: 'home', component: HomeComponent },
{path:'addtocart',component:AddTocartComponent},
{path:'registration',component:RegistrationComponent},
{path:'login',component:LoginComponent}




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
