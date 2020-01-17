import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ArticleComponent } from './views/article/article.component';
import { BasketComponent } from './views/basket/basket.component';
import { ComparisonComponent } from './views/comparison/comparison.component';
import { HomeComponent } from './views/home/home.component';
import { ListComponent } from './views/list/list.component';
import { ProductComponent } from './views/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProductCardComponent,
    SideMenuComponent,
    ArticleComponent,
    BasketComponent,
    ComparisonComponent,
    HomeComponent,
    ListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
