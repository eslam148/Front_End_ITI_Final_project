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
import {AuthService} from './Services/auth.service';
import { UserSettingComponent } from './Components/user-setting/user-setting.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserAddressComponent } from './Components/user-address/user-address.component';
import {EditUserComponent} from './Components/edit-user/edit-user.component';
import {ShowOrdersComponent} from './Components/show-orders/show-orders.component';
import {OrderItemsComponent} from './Components/order-items/order-items.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'addProduct', component: AddProductComponent,canActivate: [AuthService] },
      { path: 'sellerProducts', component: SellerProductsComponent,canActivate: [AuthService] },
      { path: 'payment', component: PaymentComponent ,canActivate: [AuthService] },
      { path: 'cart', component: CartComponent },
      { path: 'category/:id', component: CategoryProductComponent },
      { path: 'category/sub/:sub_id', component: CategoryProductComponent },
      { path: 'contactus', component: ContactUSComponent },
      { path: 'productdetails/:no', component: ProductDetailsComponent },
      { path: 'searching/:ser?', component: SearchResultComponent },
      { path: 'searching', component: SearchResultComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'usersetting', component: UserSettingComponent ,canActivate: [AuthService] },
      { path: 'changepassword', component: ChangePasswordComponent ,canActivate: [AuthService] },
      { path: 'Address', component: UserAddressComponent , canActivate: [AuthService] },
      { path: 'EditProfule', component: EditUserComponent ,canActivate: [AuthService] },
      { path: 'SellerProduct', component: SellerProductsComponent, canActivate: [AuthService] },
      { path: 'order', component: ShowOrdersComponent ,canActivate: [AuthService] },
      { path: 'orderItems/:id', component: OrderItemsComponent ,canActivate: [AuthService] }
    ] /* ,
    canActivate: [AuthService], */,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
