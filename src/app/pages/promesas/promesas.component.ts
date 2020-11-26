import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(body => console.log(body));
    this.promiseExample();
  }

  getUsuarios() {
    const promise = new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
      .then( response => response.json() )
      .then( body => resolve(body));
    });
    return promise;
  }

  promiseExample() {
    const promesa = new Promise( ( resolve, reject ) => {
      if ( false ) {
        resolve( 'Gustavo' );
      } else {
        reject( 'enemigo' );
      }
    });

    promesa.then((one) => {
      console.log( 'termine', one );
    }).catch((err) => {
      console.log( 'falla algo', err );
    });

    console.log( 'funcionando ☺' );
  }

}
