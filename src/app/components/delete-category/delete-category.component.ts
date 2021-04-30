import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  inputVal: string;

  onKey(event: any): void {
    this.inputVal = event.target.value;
  }

  submit(): void {
    this.categoriesService.deleteCategory(this.inputVal).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }
}
