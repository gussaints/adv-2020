import { Component, OnInit, Input, Output } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input('labels') doughnutChartLabels: any[] = ['Label01', 'Label02', 'Label03', 'Label04'];
  @Input('data') doughnutChartData: any[] = [[80, 80, 80, 80]];
  @Input('chartType') doughnutChartType: string = "doughnut";
  @Input('title') title: string = "No Title";
  @Input('colors') colors: any[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059', '#FDD835'] }];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
