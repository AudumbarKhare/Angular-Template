import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType, Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
     legend:{
      display: true,
      position:'top'
     }
    } 
  };

  pieChartChartLabels: string[] = ['Hot Coffee', 'Tea', 'Cold Coffee', 'Green Tea', 'Milk'];
  pieChartData: ChartData<'pie', number[], string> = {
    labels: this.pieChartChartLabels,
    datasets: [{
      data: [300, 1000, 50, 23, 10],
      label: 'Dataset'
    }]
  };
  pieChart: ChartType = 'pie';
  pieChartLegend = true;
}
