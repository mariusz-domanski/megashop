import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ArticleComponent } from './views/article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'megashop';

  constructor(public data: ApiService, public art: ArticleComponent) { }
}
