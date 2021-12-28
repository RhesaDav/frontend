import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.css']
})
export class ChartDoughnutComponent implements OnInit {
  public doughnutChartLabels: string[] = [ 'Student', 'Drop Out Student', 'Teacher' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 500, 250, 200 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
