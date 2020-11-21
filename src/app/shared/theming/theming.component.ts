import { Component, OnInit } from '@angular/core';

import { SettingsService } from "../../services/service.index";

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styles: [
  ]
})
export class ThemingComponent implements OnInit {

  links: NodeListOf<Element>;

  constructor(
    private settingsSrvc: SettingsService
  ) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.settingsSrvc.checkCurrentTheme( this.links );
  }

  public changeTheme(current: string) {
    this.settingsSrvc.changeTheme( current );
    this.settingsSrvc.checkCurrentTheme( this.links );
  }

}
