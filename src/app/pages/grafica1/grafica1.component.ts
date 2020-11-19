import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  // Doughnut
  public doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Online Sales'];

  public doughnutChartData1 = [[80, 220, 301, 50]];
  public doughnutChartData2 = [[350, 450, 100, 150]];
  public doughnutChartData3 = [[250, 130, 70, 170]];
  public doughnutChartData4 = [[50, 150, 120, 220]];

  public doughnutChartType = 'doughnut';

  public colors = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059', '#FDD835'] }];
  

  constructor() { }

  ngOnInit(): void {
  }

}
