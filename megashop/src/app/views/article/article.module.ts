import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticleRoutingModule } from './article-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HttpClientModule
  ]
})
export class ArticleModule { }
