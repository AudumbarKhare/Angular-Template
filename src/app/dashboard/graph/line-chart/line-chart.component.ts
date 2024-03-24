import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { DashboardService } from 'src/app/service/dashboard.service';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  lineChartData: ChartDataset[] = [];  
  lineChartLabels: string[] = [];     
  lineChartOptions: ChartOptions = {};  
  lineChartLegend = true;
  lineChartType: ChartType = 'line';  
  months: string[] = [];

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this._dashboardService.getChartData().subscribe(res => {
      console.log('API Response:', res);
      const onlineData = res.map(item => item.online || 0);
      const cashData = res.map(item => item.cash || 0);
      this.lineChartData = [
        { data: onlineData, label: 'online' },
        { data: cashData, label: 'cash' }
      ];
      this.months = res.map(item => item.month);
      this.createLineChart();
    });
    
  }

  createLineChart() {
    this.lineChartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Payment Methods Report',
          font: {
            size: 18
          }
        }
      }
    };
    this.lineChartLabels = this.months;
  }
}
