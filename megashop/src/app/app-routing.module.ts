import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { BasketComponent } from './views/basket/basket.component';


const routes: Routes = [
  {
    path: 'article/:id',
    component: ArticleComponent,
    children: [
      { path: 'o-nas', component: ArticleComponent },
      { path: 'polityka-prywatnosci', component: ArticleComponent },
      { path: 'cennik-dostaw', component: ArticleComponent },
      { path: 'kontakt', component: ArticleComponent }
    ]
  },
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
