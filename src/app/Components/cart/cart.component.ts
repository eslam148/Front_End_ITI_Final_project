import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { IProduct } from './../../Model/IProduct';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  productInCart: IProduct[] = [];
  totalPrice!:number
  constructor(
    private ProductService: ProductService,
    private CartService: CartService
  ) {
    this.productInCart = this.CartService.getItems();
    this.totalPrice = this.CartService.totalPrice();
  }

}
