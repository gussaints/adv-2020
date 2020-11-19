import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    
    if ( theme !== null ) {
      this.linkTheme.setAttribute('href', theme);
    }
  }

}
