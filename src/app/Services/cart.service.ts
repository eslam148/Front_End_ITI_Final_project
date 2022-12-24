import { Injectable } from '@angular/core';
import { IProduct } from './../Model/IProduct';
import { IOrder } from './../Model/IOrder';
import {BehaviorSubject, Observable} from 'rxjs';
import {decrement, increment} from '../ReduxStore/actions/CartAction';
import {select, Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CountInCart = new BehaviorSubject<number>(0);
  event = this.CountInCart.asObservable();
  count$: Observable<number>;

  constructor(private store: Store<{ Cart: number }>) {
    this.count$ = store.pipe(select('Cart'));
  }
  items: IProduct[] = [];
  localData!: string;
  count: number = 0;
  addToCart(addedItem: IProduct) {
    if(!this.itemInCart(addedItem)){
        this.store.dispatch(increment());
    }

    addedItem.quantity = 1;
    this.items.push(addedItem);
    this.saveCart();
    this.count++;
    this.CountInCart.next(this.count);
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }
  getItems() {
    this.loadCart();
    return this.items;
  }

  loadCart() {
    const item = window.localStorage.getItem('cart_items');
    this.items = item ? JSON.parse(item) : [];
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart_items');
  }
  itemInCart(item: IProduct): boolean {
    return this.items.findIndex((o) => o.id === item.id) > -1;
  }
  AddOrder(Order: IProduct[]) {
    localStorage.setItem('Order', JSON.stringify(Order));
  }
  GetOrder(): IProduct[] {
    const item = window.localStorage.getItem('Order');
    return item ? JSON.parse(item) : [];
  }
  removeItem(item:IProduct) {
    this.store.dispatch(decrement());
    const index = this.items.findIndex((o) => o.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }
}
