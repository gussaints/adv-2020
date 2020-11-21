import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const theme = localStorage.getItem('theme');
    
    if ( theme !== null ) {
      this.linkTheme.setAttribute('href', theme);
    }
  }

  public changeTheme(current: string) {
    const url = `./assets/css/colors/${ current }.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

  public checkCurrentTheme( links: NodeListOf<Element> ) { 
    links.forEach(elem => {
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      elem.classList.remove('working');

      if ( btnThemeUrl === currentTheme ) {
        elem.classList.add('working');
      }
    });
  }

}
