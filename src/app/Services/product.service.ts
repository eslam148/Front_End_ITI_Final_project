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
  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }

  getProdBySubCatId(sub_id:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/ShowProductBySubCat/${sub_id}`);
  }
  getProdBySubCatIdAndPrice(sub_id:number,min_pr:number,max_pr:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/GetProductByCatAndPrice/${sub_id}&${min_pr}&${max_pr}`);
  }
  getAllProducts():Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>( `${environment.baseURL}/GetProducts`);
  }
}
