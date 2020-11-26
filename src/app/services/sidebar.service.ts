import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard!!!',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main!!!', url: '/' },
        { titulo: 'ProgressBar', url: '/dashboard/progress' },
        { titulo: 'Promesas', url: '/dashboard/promesas' },
        { titulo: 'RXJS', url: '/dashboard/rxjs' },
        { titulo: 'Graficas', url: '/dashboard/graph1' }
      ]
    }
  ];

  constructor() { }
}
