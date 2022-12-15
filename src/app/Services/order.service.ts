import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {IOrderDetails,OrderItem} from '../Model/IOrder'
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private httpOptions = {};

  constructor(private httpclient: HttpClient) {
    const item = window.localStorage.getItem('token');
    let token: String = item ? JSON.parse(item) : '';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
  }

  addOrderDitalis(IOrderDetails: IOrderDetails): Observable<IOrderDetails> {
    return this.httpclient.post<IOrderDetails>(
      `${environment.BaseURL}/AddOrderDetails`,
      JSON.stringify(IOrderDetails),
      this.httpOptions
    );
  }

  addOrderitems(OrderItems: OrderItem[]): Observable<OrderItem[]> {
    return this.httpclient.post<OrderItem[]>(
      `${environment.BaseURL}/AddOrderItems`,
      JSON.stringify(OrderItems),
      this.httpOptions
    );
  }
}