import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private charts = [];

  constructor() { }

  addChart(chartData) {
    this.charts.push(chartData);
  }

  getCharts() {
    return this.charts;
  }

}
