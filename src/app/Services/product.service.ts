import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Model/IProduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient: HttpClient) { }
  getAllProducts():Observable<IProduct[]>{
  return this.HttpClient.get<IProduct[]>(`${environment.urlCategories}/GetProducts`)
  }
}
