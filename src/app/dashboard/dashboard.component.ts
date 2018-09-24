import { Component, OnInit } from '@angular/core';
import { ChartService } from './../chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = '';
  value = 0;
  chartName = '';
  dataSource = [];

  chartsService: ChartService;

  constructor(chartsService: ChartService) {
    this.chartsService = chartsService;
  }

  ngOnInit() {
  }

  onSubmitChart() {
    const chartData = {
      name: this.chartName,
      values: this.dataSource
    };
    this.chartsService.addChart(chartData);
    this.name = '';
    this.value = 0;
    this.chartName = '';
    this.dataSource = [];
  }

  onSubmitData(data) {
    this.dataSource.push(data.value);
    this.name = '';
    this.value = 0;
  }

}
