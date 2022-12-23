import { Component } from '@angular/core';
import {IProduct} from 'src/app/Model/IProduct';
import {ProductService} from '../../Services/product.service'
@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css'],
})
export class SellerProductsComponent {
  products:IProduct[] = [];
  constructor(private ProductService: ProductService) {
     const item = window.localStorage.getItem('user');
     let user = item ? JSON.parse(item) : [];
            // console.log(user);

    ProductService.getSellerproducts(user.id).subscribe(
      (p) => {this.products = p
        console.log(p)
      }
    );
  }


}
