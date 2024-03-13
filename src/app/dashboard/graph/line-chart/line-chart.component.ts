import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Online' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Cash' },
  ];

  lineChartLabels:string[]=['January','February','March','April','May','June','July'];

  lineChartOptions: ChartOptions = {
    responsive: true,
    plugins:{
      title:{
        display:true,
        text:'Payment Methods Report',
        font:{
          size:18
        }
      }
    }
  };

  lineChartColors:any[]=[];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType:ChartType = 'line';

  constructor() { }

  ngOnInit(): void {

  }

}
