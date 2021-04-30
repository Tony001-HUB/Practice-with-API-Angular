import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/сategory';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-by-id',
  templateUrl: './category-by-id.component.html',
  styleUrls: ['./category-by-id.component.css']
})
export class CategoryByIdComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  categoryById?: Category;
  inputVal: string;

  ngOnInit(): void {
  }

  onKey(event: any): void {
    this.inputVal = event.target.value;
  }

  sendingRequestToServer(): void {
    this.categoriesService.getCategoryById(this.inputVal).subscribe(item =>
    {
      this.categoryById = item;
    });
  }
}
