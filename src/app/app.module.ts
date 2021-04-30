import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryByIdComponent } from './components/category-by-id/category-by-id.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { PutCategoryComponent } from './components/put-category/put-category.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categoriesId', component: CategoryByIdComponent},
  { path: 'postCategory', component: PostCategoryComponent},
  { path: 'deleteCategory', component: DeleteCategoryComponent},
  { path: 'putCategory', component: PutCategoryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryByIdComponent,
    PostCategoryComponent,
    DeleteCategoryComponent,
    PutCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
