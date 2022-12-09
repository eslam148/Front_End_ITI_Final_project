import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubCategory } from '../Model/isub-category';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private httpOptions={};
  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }

    getSubCategory(id :number):Observable<ISubCategory[]>{
      return this.httpClient.get<ISubCategory[]>(`${environment.baseURL}/GetSubCategory/${id}`);

    }


}


