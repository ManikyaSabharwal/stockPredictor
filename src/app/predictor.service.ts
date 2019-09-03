import { Injectable } from '@angular/core';
import { STOCKS } from './stocks-data';
import { Stock } from './stock';
import * as CanvasJS from './canvasjs.min';
//import { lastSearched } from './search-history/search-history.component';

@Injectable({
  providedIn: 'root'
})
export class PredictorService {
  private stocks: Stock[] = STOCKS;
  private lastSearched: Stock[] = [];
  private days: string[] =["\t\tMon\t\t", "\t\tTue\t\t", "\t\tWed\t\t", "\t\tThu\t\t", "\t\tFri\t\t", "\t\tSat\t\t", "\t\tSun"];
  constructor() { }

  getGraph(symbol:any) {
    for (var i = 0; i < this.stocks.length; i++) {
      if (this.stocks[i].symbol === symbol) {
        this.getStock(symbol, i);
        this.addToSearched(this.stocks[i]);
      }
    }
  }

  addToSearched(stock: Stock){
    if(this.lastSearched.length < 3){
      this.lastSearched.push(stock);
    }else{
      this.lastSearched.shift();
      this.addToSearched(stock);
    }
    
  }

  getStockIndex(symbol:string): {y: number; color: string;}[]{
    var y: number;
    var color: string;
    var stockValue = [{ y,color }];
    for (var i = 0; i < this.stocks.length; i++) {
      if (this.stocks[i].symbol === symbol) {
        for(var j = 0; j < this.stocks[i].prices.length; j++){
          if(j > 0 && this.stocks[i].prices[j] < this.stocks[i].prices[j-1]){
            stockValue.push({y: this.stocks[i].prices[j], color:"red"});
          }else{
            stockValue.push({y: this.stocks[i].prices[j], color:"#0ac20a"});
          }
        }    
      }
    }
    
    for(var k = 0; k < stockValue.length; k++){
      console.log(stockValue[k].y);
      console.log(stockValue[k].color);
    }
    return stockValue;
  }
  getStock(stockName: string, i: number){
    var days:Date[] = [new Date(2019, 7, 5), new Date(2019, 7, 6), new Date(2019, 7, 7), new Date(2019, 7, 8), new Date(2019, 7, 9), new Date(2019, 7, 10), new Date(2019, 7, 11)];
    var x: Date = new Date(2019, 7, 5);
    var y: number;
    var color: string;
    var stockValue = [{x: x ,  y,color }];
    for(var j = 0; j < this.stocks[i].prices.length; j++){
      if(j > 0 && this.stocks[i].prices[j] < this.stocks[i].prices[j-1]){
        stockValue.push({x: days[j], y: this.stocks[i].prices[j], color:"red"});
      }else{
        stockValue.push({x: days[j], y: this.stocks[i].prices[j], color:"#0ac20a"});
      }
    }    
    var chart = new CanvasJS.Chart("chartContainer", {
      backgroundColor: "#353F61",
      animationEnabled: true,
      title:{
        text: "Stock Price of " + this.stocks[i].name  + " - August",
        fontWeight: "lighter",
        fontColor: "#ffffff",
        padding:{
          top: 10,
          bottom: 30,
        } ,
        theme: "dark1",
        fontFamily: "Calibri"
      },
      axisX:{
        title: "Days of Stock trade",
        titleFontColor: "#ffffff",
        valueFormatString: "DDD",   
        minimum: new Date(2019,0o7,5),
        labelFontColor: "#ffffff",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY: {
        title: "Closing Price (in USD)",
        titleFontColor: "#ffffff",
        includeZero: false,
        valueFormatString: "$#,##0.00",
        labelFontColor: "#ffffff",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
        }
      },
      data: [{
        type: "area",
        xValueFormatString: "DDD",
        yValueFormatString: "$##0.00",
        dataPoints: stockValue
      }]
    });
    chart.render();
  }

}
