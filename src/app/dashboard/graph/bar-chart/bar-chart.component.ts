import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  barCharOptions: ChartOptions = {
    responsive: true
  };

  barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  ngOnInit(): void {

  }

}
