import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { SellerProductsComponent } from './Components/seller-products/seller-products.component';
import {ProductDetailsComponent} from './Components/product-details/product-details.component';
import {CategoryProductComponent} from './Components/category-product/category-product.component';
import {ContactUSComponent} from './Components/contact-us/contact-us.component';
import {SideFilterComponent} from './Components/side-filter/side-filter.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LayoutComponent } from './Components/layout/layout.component';
import {NgxPayPalModule} from 'ngx-paypal';
@NgModule({
  declarations: [AppComponent,
     ProductDetailsComponent,
     CategoryProductComponent,
     ContactUSComponent,
     SideFilterComponent,
      PaymentComponent,
       AddProductComponent,
        SellerProductsComponent,
      LoginComponent,
       RegisterComponent,
        CartComponent,
         AboutUsComponent,
         FooterComponent,
         HeaderComponent,
          HomeComponent,
          LayoutComponent],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPayPalModule
    ,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
