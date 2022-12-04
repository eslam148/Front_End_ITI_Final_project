import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CategoryProductComponent } from './Component/category-product/category-product.component';
import { ContactUSComponent } from './Component/contact-us/contact-us.component';
import { SideFilterComponent } from './Component/side-filter/side-filter.component';
@NgModule({
  declarations: [AppComponent,
     ProductDetailsComponent,
     CategoryProductComponent,
     ContactUSComponent,
     SideFilterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
