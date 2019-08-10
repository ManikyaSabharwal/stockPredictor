import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { PredictorService } from '../predictor.service';
@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.css']
})
export class StockGraphComponent implements OnInit {
  constructor(private predictorService: PredictorService) { }
  ngOnInit() {
  }
}
