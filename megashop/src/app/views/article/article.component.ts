import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public href = '';
  url = '';

  constructor(public data: ArticlesService, public router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
