import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { customerGuard } from './AuthService/customer.guard';
import { adminGuard } from './AuthService/admin.guard';




const routes: Routes = [
  {path:'',component: LoginComponent},
  {
    path:'registration',component:RegistrationComponent
  },
  
  {
    path:'customer',
    canMatch:[customerGuard],
    loadChildren:() => import('./modules/customer/customer.module').then((m) => m.CustomerModule)
  },
  {
    path:'admin',
    canMatch:[adminGuard],
    loadChildren:() => import('./modules/admin/admin/admin.module').then((m) => m.AdminModule)
  }





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
