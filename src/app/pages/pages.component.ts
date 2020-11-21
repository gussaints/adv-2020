import { Component, OnInit } from '@angular/core';

import { SettingsService } from "../services/service.index";

declare function customInitFunctions( );

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(
    private settingsSrvc: SettingsService
  ) {
    customInitFunctions( );
  }

  ngOnInit(): void {}

}
