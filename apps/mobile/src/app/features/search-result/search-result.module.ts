import { MainNewsModule } from './../main-news/main-news.module';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result.component';
import { CoreModule } from '@goal-front/core';



@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    MainNewsModule,
    CoreModule
  ]
})
export class SearchResultModule { }
