import { Component, OnInit } from '@angular/core';
import { ChartService } from './../chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  charts = [];
  chartsService: ChartService;

  chartsNames = [];
  selectedChart = '';
  selectData = [];
  chart = [];
  colorArray = [
    '#D32F2F',
    '#FFCDD2',
    '#FF4081',
    '#FFEB3B',
    '#1976d2',
    '#E64A19',
    '#FFEB3B',
    '#FFFFFF',
    '#212121',
    '#7C4DFF',
  ]

  constructor(chartsService: ChartService) {
    this.chartsService = chartsService;
  }

  ngOnInit() {
    this.charts = this.chartsService.getCharts();
    this.chartsNames = this.charts.map(chart => chart.name);
  }

  selectedChartHandler() {
    if (this.selectedChart.length === 0) {
      alert('Selecionar um Gráfico');
      return;
    }

    this.selectData = this.charts.filter(chart => chart.name === this.selectedChart).map(chart => chart.values);

    const datasets = [];
    const labels = [];
    const backgroundColor = [];
    this.selectData[0].map((value, key) => {
      datasets.push(value.value);
      labels.push(value.name);
      backgroundColor.push(this.colorArray[key]);
    });
    const data = {
      datasets: [{
        data: [...datasets],
        backgroundColor: backgroundColor,
      }],
      labels: [...labels]
    };

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: data,
    });

  }
}
