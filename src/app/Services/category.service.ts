import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ICategory } from '../Model/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClient: HttpClient) { }
  getCategories(): Observable<ICategory[]> {
    return this.HttpClient.get<ICategory[]>(`${environment.urlCategories}/category`)
  }
}
