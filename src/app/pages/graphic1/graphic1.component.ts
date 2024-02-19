import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: ``
})
export class Graphic1Component {

  public doughnutChartLabels: string[] = [
    'Download Revenue',
    'In-Store Revenue',
    'Mail-Order Revenue',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [450, 350, 200],
        backgroundColor: ['light green', 'gray', 'black']
      },
      { 
        data: [550, 150, 300],
        backgroundColor: ['pink', 'magenta', 'light blue']
      },
    ],
    
  };

}
