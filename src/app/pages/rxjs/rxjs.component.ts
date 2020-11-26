import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, map, catchError, take, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);

    this.retornaObservable().pipe(
      retry(1)
    ).subscribe(
      (val) => console.log(' subs ', val),
      (err) => console.warn('Error', err),
      () => console.info( 'Subscribe Complete' )
    );
    
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      map( val => val + 1 ),
      filter( val => val % 2 === 0 ),
      // take(10)
    );
  }

  retornaObservable(): Observable<number> {
    let i: number = -1;
    return new Observable<number>( observer => {
      const intervalo = setInterval( () => {
        i += 1;
        observer.next(i);
        if ( i === 8 ) {
          clearInterval(intervalo);
          observer.complete();
        }

        if ( i === 2 ) {
          console.log( 'i es === 2, error' );
          observer.error(`i llego al valor de ${i}`);
        }
      }, 1000);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.intervalSubs.unsubscribe();
  }

}
