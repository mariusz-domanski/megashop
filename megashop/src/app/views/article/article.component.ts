import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  type: any;
  description: any;

  constructor(public data: ArticlesService, private router: Router) { }

  ngOnInit() {
    const data = history.state.data;
    this.type = data['type'];
    this.description = data['description'];
  }

  getArticle(index) {
    this.router.navigate(['/article/' + index], {state: {data: this.data.arts[index]}}
  );
  }
}
