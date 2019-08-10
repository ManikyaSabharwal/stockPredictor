import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { PredictorService } from '../predictor.service';
export var lastSearched : Stock[] =[];

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})

export class SearchHistoryComponent implements OnInit {
  constructor(private predictorService: PredictorService) { }
  ngOnInit() {
  }
  
}
