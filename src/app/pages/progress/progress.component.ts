import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  misValores = [10, 40, 70, 90];
  misClases = ['primary','info','success','warning']

  constructor() { }

  ngOnInit(): void {
  }

  getPorcentaje(item: any) {
    return `${ item }%`;
  }

}
