import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Category} from '../models/сategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient){}

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>('https://localhost:44322/Categories');
  }
  getCategoryById(categoryId: string): Observable<Category> {
    return this.httpClient.get<Category>('https://localhost:44322/Categories/' + categoryId);
  }
  postCategory(str: string): Observable<Category> {
    return this.httpClient.post<Category>('https://localhost:44322/Categories', { title: str});
  }
  deleteCategory(categoryIdForDelete: string): Observable<Category> {
    return this.httpClient.delete<Category>(`https://localhost:44322/Categories/${categoryIdForDelete}`);
  }
  putCategory(categoryIdForPut: string, newTitle: string): Observable<Category> {
    return this.httpClient.put<Category>(`https://localhost:44322/Categories/${categoryIdForPut}`, {
      categoryId: categoryIdForPut,
      title: newTitle
    });
  }

}
