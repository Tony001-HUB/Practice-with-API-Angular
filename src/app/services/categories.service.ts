import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Category} from '../models/сategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public httpClient: HttpClient;

  constructor(httpClient: HttpClient){
    this.httpClient = httpClient;
  }

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>('https://localhost:44322/Categories');
  }

}
