import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PredictorService } from './predictor.service';
import { StockGraphComponent } from './stock-graph/stock-graph.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StockGraphComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ PredictorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
