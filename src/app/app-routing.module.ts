import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { SellerProductsComponent } from './Component/seller-products/seller-products.component';
import { HomeComponent } from './Components/Home/home/home.component';

const routes: Routes = [
   {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"sellerProducts",component:SellerProductsComponent},
  {path:"payment",component:PaymentComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
