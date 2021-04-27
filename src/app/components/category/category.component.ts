import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/сategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  @Input() public category: Category;

  ngOnInit(): void {
  }

}
