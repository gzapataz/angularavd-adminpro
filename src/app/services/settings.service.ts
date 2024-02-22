import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private htmlElement = document.querySelector('#theme');
  private themeLink = document.querySelector('#theme');

  constructor() { 
    console.log('Setting service Init');
    let cssUrl = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.htmlElement?.setAttribute( 'href', cssUrl );    
  }

  changeTheme( theme: string ) {
    const cssUrl = `./assets/css/colors/${ theme }.css`;
    
    this.themeLink?.setAttribute('href', cssUrl );
    localStorage.setItem('theme', cssUrl );
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links!.forEach( elem => {
      elem.classList.remove('working');
      const bntThemes = elem.getAttribute('data-theme');
      const bntThemeUrl = `./assets/css/colors/${ bntThemes }.css`;
      const currentThemeUrl = this.themeLink?.getAttribute('href');

      if ( bntThemeUrl === currentThemeUrl ) {
        elem.classList.add('working');
      }
    });
  }

}
