import { Injectable } from '@angular/core';
import { IProduct } from './../Model/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  items: IProduct[] = [];
  localData!: string;
  addToCart(addedItem: IProduct) {
    addedItem.qauntity = 1;
    this.items.push(addedItem);
    this.saveCart();
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }
  getItems()  {
    this.items = this.loadCart();
    return this.items;
  }

  loadCart() {
    const item = window.localStorage.getItem('cart_items');

    return item ? JSON.parse(item) : [];
  }

  clearCart()  {
    this.items = [];

    localStorage.removeItem('cart_items');
  }
  itemInCart(item: IProduct): boolean {
    return this.items.findIndex((o) => o.no === item.no) > -1;
  }
  totalPrice(){
    let total:number=0;
    if( this.items.length > 0){
        for(let p of this.items){
            total+=p.price;
        }
    }
    return total;
  }
}
