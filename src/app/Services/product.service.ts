import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IProduct } from '../Model/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpOptions = {};

  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
   GetProductByCategory(CatId: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseURL}/ShowProductByCategory/${CatId}`
    );
  }
   GetProductByID(Id: number): Observable<IProduct> {
    return this.httpclient
      .get<IProduct>(`${environment.baseURL}/GetProductById/${Id}`);
   }
}






