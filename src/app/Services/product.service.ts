import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IProduct } from '../Model/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private httpOptions={};
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    }) 
  };
}

getProductById(prdID:number):Observable<IProduct>{
  return this.httpClient.get<IProduct>(`${environment.BaseURL}/GetProductById/${prdID}`)
}

addNewProduct(newPrd:IProduct):Observable<IProduct>{
  return this.httpClient.post<IProduct>(`${environment.BaseURL}/AddSellerProdcuts`,JSON.stringify(newPrd),this.httpOptions)
}
getNewproducts():Observable<IProduct[]>{
  return this.httpClient.get<IProduct[]>(`${environment.BaseURL}/GetNewProducts`)
}

getBestSellerproducts():Observable<IProduct[]>{
  return this.httpClient.get<IProduct[]>(`${environment.BaseURL}/GetBestSeller`)
}
}
