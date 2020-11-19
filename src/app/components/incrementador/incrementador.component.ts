import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('valor') progreso: any = 85;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter;
  
  get getPorcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor( valor: any ) {
    this.progreso = parseInt(this.progreso) + parseInt(valor) <= 0 ? 0 :
                    parseInt(this.progreso) + parseInt(valor) >= 100 ? 100 :
                    parseInt(this.progreso) + parseInt(valor);
    
    this.valorSalida.emit( this.progreso );
  }

  onChange( nuevoValor: number ) {
    this.progreso = nuevoValor <= 0 ? 0 :
                    nuevoValor >= 100 ? 100 :
                    nuevoValor;
    console.log( 'works', this.progreso );
    
    this.valorSalida.emit( this.progreso );
  }

}
