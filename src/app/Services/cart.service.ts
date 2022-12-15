import { Injectable } from '@angular/core';
import { IProduct } from './../Model/IProduct';
import { IOrder } from './../Model/IOrder';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CountInCart = new BehaviorSubject<number>(0);
  event = this.CountInCart.asObservable();
  constructor() {}
  items: IProduct[] = [];
  localData!: string;
  count:number =0;
  addToCart(addedItem: IProduct) {
    addedItem.qauntity = 1;
    this.items.push(addedItem);
    this.saveCart();
    this.count++
    this.CountInCart.next(this.count);
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }
  getItems() {
    this.items = this.loadCart();
    return this.items;
  }

  loadCart() {
    const item = window.localStorage.getItem('cart_items');

    return item ? JSON.parse(item) : [];
  }

  clearCart() {
    this.items = [];

    localStorage.removeItem('cart_items');
  }
  itemInCart(item: IProduct): boolean {
    return this.items.findIndex((o) => o.no === item.no) > -1;
  }
  AddOrder(Order: IProduct[]) {
    localStorage.setItem('Order', JSON.stringify(Order));
  }
  GetOrder(): IProduct[] {
    const item = window.localStorage.getItem('Order');
    return item ? JSON.parse(item) : [];
  }
}
