import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  inputVal: string;

  onKey(event: any): void {
    this.inputVal = event.target.value;
  }

  submit(): void {
    this.categoriesService.postCategory(this.inputVal).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
