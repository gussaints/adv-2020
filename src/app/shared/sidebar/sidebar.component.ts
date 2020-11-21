import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/service.index";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(
    private sidebarSrvc: SidebarService
  ) {
    this.menuItems = this.sidebarSrvc.menu;
    console.log( this.menuItems );
  }

  ngOnInit(): void {
  }

}
