import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Model/IProduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
    return this.httpclient.get<IProduct>(
      `${environment.baseURL}/GetProductById/${Id}`
    );
  }
   getProdBySubCatId(sub_id:number):Observable<IProduct[]>{

    return this.httpclient.get<IProduct[]>(`${environment.baseURL}/ShowProductBySubCat/${sub_id}`);

  }

  getProdBySubCatIdAndPrice(sub_id:number,min_pr:number,max_pr:number):Observable<IProduct[]>{

    return this.httpclient.get<IProduct[]>(`${environment.baseURL}/GetProductByCatAndPrice/${sub_id}&${min_pr}&${max_pr}`);

  }

  getAllProducts():Observable<IProduct[]> {

    return this.httpclient.get<IProduct[]>( `${environment.baseURL}/GetProducts`);

  }


addNewProduct(newPrd:IProduct):Observable<IProduct>{
  return this.httpclient.post<IProduct>(`${environment.BaseURL}/AddSellerProdcuts`,JSON.stringify(newPrd),this.httpOptions)
  }
getNewproducts():Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(`${environment.BaseURL}/GetNewProducts`)
  }

getBestSellerproducts():Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(`${environment.BaseURL}/GetBestSeller`)
  }
}
