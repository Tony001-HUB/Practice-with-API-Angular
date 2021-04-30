import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-put-category',
  templateUrl: './put-category.component.html',
  styleUrls: ['./put-category.component.css']
})
export class PutCategoryComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  inputValCurrentId: string;
  inputValNewTitle: string;
  value: string;

  onKeyNowId(event: any): void {
    this.inputValCurrentId = event.target.value;
  }

  onKeyNewTitle(event: any): void {
    this.inputValNewTitle = event.target.value;
  }

  submit(): void {
    this.categoriesService.putCategory(this.inputValCurrentId, this.inputValNewTitle).subscribe(data => {});
  }

  ngOnInit(): void {
  }

}
