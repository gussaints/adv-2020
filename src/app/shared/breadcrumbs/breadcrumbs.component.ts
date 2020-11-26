import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public tituloSubs$: Subscription;
  public titulo: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tituloSubs$ = this.getArgumentos( ).subscribe( ({ titulo }) => {
      this.titulo = titulo;
      document.title = `Foxcode ~ ${ titulo }`;
    });

    // console.log( route.snapshot.children );
    
  }

  getArgumentos(){
    return this.router.events.pipe(
      filter( (event: any) => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // throw new Error('jajajajajajajajajajajaja');
    this.tituloSubs$.unsubscribe();
  }

}
