import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: ''},
        { title: 'ProgressBar', url: 'progress'},
        { title: 'Graphics', url: 'graphic1'},
      ]
    }
  ]

  constructor() { }
}