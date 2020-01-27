import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

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
  }

  getData() {
    this.router.navigate(['o-nas'], {state: {relativeTo: this.router}}
  );
  }
}
