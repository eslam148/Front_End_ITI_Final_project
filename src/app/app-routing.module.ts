import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { SellerProductsComponent } from './Component/seller-products/seller-products.component';

const routes: Routes = [
  {path:"addProduct",component:AddProductComponent},
  {path:"sellerProducts",component:SellerProductsComponent},
  {path:"payment",component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
