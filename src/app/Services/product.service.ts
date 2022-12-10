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
   const item = window.localStorage.getItem('token');
   let token: String = item ? JSON.parse(item) : '';
      console.log(token);

   this.httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       Authorization: 'Bearer ' + token,
     }),
   };
   console.log(this.httpOptions);

  }
  GetProductByCategory(CatId: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseURL}/ShowProductByCategory/${CatId}`,
      this.httpOptions
    );
  }
  GetProductByID(Id: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(
      `${environment.baseURL}/GetProductById/${Id}`,
      this.httpOptions
    );
  }
   getProdBySubCatId(sub_id:number):Observable<IProduct[]>{

    return this.httpclient.get<IProduct[]>(
      `${environment.baseURL}/ShowProductBySubCat/${sub_id}`,
      this.httpOptions
    );

  }

  getProdBySubCatIdAndPrice(sub_id:number,min_pr:number,max_pr:number):Observable<IProduct[]>{

    return this.httpclient.get<IProduct[]>(
      `${environment.baseURL}/GetProductByCatAndPrice/${sub_id}&${min_pr}&${max_pr}`,
      this.httpOptions
    );

  }

  getAllProducts():Observable<IProduct[]> {

    return this.httpclient.get<IProduct[]>(
      `${environment.baseURL}/GetProducts`,
      this.httpOptions
    );

  }


addNewProduct(newPrd:IProduct):Observable<IProduct>{
  return this.httpclient.post<IProduct>(`${environment.BaseURL}/AddSellerProdcuts`,JSON.stringify(newPrd),this.httpOptions)
  }
getNewproducts():Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(
    `${environment.BaseURL}/GetNewProducts`,
    this.httpOptions
  );
  }

getBestSellerproducts():Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(
    `${environment.BaseURL}/GetBestSeller`,
    this.httpOptions
  );
  }
}
