import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { SellerProductsComponent } from './Components/seller-products/seller-products.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoryProductComponent } from './Components/category-product/category-product.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,children:[{path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"sellerProducts",component:SellerProductsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"cart",component:CartComponent},
  {path:"category/:id",component:CategoryProductComponent},
  {path:"contactus",component:ContactUSComponent},
  {path:"productdetails",component:ProductDetailsComponent},
  {path:"Search/:ser",component:SearchResultComponent},





  {path:"aboutus",component:AboutUsComponent},
]},
  {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
   ]


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
