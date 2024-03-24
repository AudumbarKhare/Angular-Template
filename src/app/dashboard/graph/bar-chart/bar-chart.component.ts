import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  barChart$: any[] = [];
  barChartData: ChartDataset[] = [];  // Initialize empty array
  barChartLabels: string[] = [];     // Initialize empty array
  barCharOptions: ChartOptions = {};  // Initialize empty object
  barChartLegend: boolean = true;
  months: string[] = [];
  barChartType: ChartType = 'bar';

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {

    this._dashboardService.getChartData().subscribe(res => {
      const onlineData = res.map(item => item.online || 0);
      const cashData = res.map(item => item.cash || 0);
      this.barChartData = [
        { data: onlineData, label: 'online' },
        { data: cashData, label: 'cash' }
      ];
      this.months = res.map(item => item.month);
      this.createBarChart();
    });
  }


  createBarChart() {
    this.barCharOptions = {
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
    this.barChartLabels = this.months;
  }

}
