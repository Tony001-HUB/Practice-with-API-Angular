import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './models/сategory';
import { Observable } from 'rxjs/internal/Observable';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private сategoryService: CategoriesService) {}
  public categories: Category[];

  title = 'untitled';

  ngOnInit(): void {
    this.сategoryService.getCategories().subscribe(categories =>
    {
      /*this.categories = categories;*/
    });
  }
}
