import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { BasketComponent } from './views/basket/basket.component';


const routes: Routes = [
  {path: 'produkty', component: ListComponent},
  {path: 'article/:articleTitle', component: ArticleComponent},
  {path: 'koszyk', component: BasketComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
