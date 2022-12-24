import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Model/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: IProduct[] = [];
  bestSellerList: IProduct[] = [];
 DiscountedProducts: IProduct[] = [];
  image: string[] = [];
  count$: Observable<number>;
  constructor(
    private produtService: ProductService,
    private CartService: CartService,
    private store: Store<{ Cart: number }>
  ) {
    this.count$ = store.pipe(select('Cart'));
  }

  ngOnInit(): void {
    this.produtService.getNewproducts().subscribe((p) => {
      this.productList = p;
    });
    this.produtService
      .getBestSellerproducts()
      .subscribe((p) => (this.bestSellerList = p));
      this.produtService.GetDescountedProducts().subscribe(p=>this.DiscountedProducts=p);
  }

  addToCart(item: IProduct) {
    //  this.store.dispatch(increment());
    if (!this.CartService.itemInCart(item)) {
      item.quantity = 1;
      this.CartService.addToCart(item); //add items in cart
    }
  }
}
