import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {addToCart, GetCart} from 'src/app/Model/GeneralFunctions';
import {IProduct} from 'src/app/Model/IProduct';
import {ProductService} from '../../Services/product.service'
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css'],
})
export class CategoryProductComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private ProductService: ProductService,
    private activeroute: ActivatedRoute,
    @Inject(CartService) private CartService: CartService
  ) {
    this.activeroute.paramMap.subscribe((paramMap) => {
      let CatID = paramMap.get('id') ? Number(paramMap.get('id')) : 1;
      console.log(CatID);
      this.ProductService.GetProductByCategory(CatID).subscribe((data) => {
        this.products = data;
        console.log(this.products);
      });
    });
  }
  addToCart(item: IProduct) {
    if (!this.CartService.itemInCart(item)) {
      item.qauntity = 1;
      this.CartService.addToCart(item); //add items in cart
    }
  }
  ngOnInit(): void {}
}
