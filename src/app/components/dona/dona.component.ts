import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {
  @Input()
  public title: string = 'No Title';
  
  // Doughnut
  @Input()
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  @Input()
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [350, 450, 100],
        backgroundColor: ['red', 'blue', 'green']
      },
      { 
        data: [750, 50, 200],
        backgroundColor: ['pink', 'magenta', 'light blue']
      },
    ],
    
  };
  
  public doughnutChartType: ChartType = 'doughnut';

}
