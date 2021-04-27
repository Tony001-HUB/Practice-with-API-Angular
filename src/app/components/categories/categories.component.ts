import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {Category} from '../../models/сategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private сategoryService: CategoriesService) {}
  public categories: Category[];

  title = 'untitled';

  ngOnInit(): void {
    this.сategoryService.getCategories().subscribe(categories =>
    {
      this.categories = categories;
    });
  }

}
