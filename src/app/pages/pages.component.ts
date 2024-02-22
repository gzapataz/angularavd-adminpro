import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// Esta funcion se adiciona porque fue necesario modificar el js custom.js en Assets para volver a regargar los efectos visuales
declare function initiateFunctionPage(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {
  constructor( private settingsService: SettingsService ) {}

  ngOnInit(): void {
    initiateFunctionPage();
  }
}
