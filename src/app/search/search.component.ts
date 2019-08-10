import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { PredictorService } from '../predictor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  styles: ['body { color: white; }']

})
export class SearchComponent implements OnInit {
  
  constructor(private predictorService: PredictorService) {
  }

  ngOnInit() {
  }
  
}
