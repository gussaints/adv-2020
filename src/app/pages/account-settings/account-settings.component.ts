import { Component, OnInit } from '@angular/core';

import { SettingsService } from "../../services/service.index";

declare function customInitFunctions( );

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

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

  public restart(){
    console.log( 'restarting' );
    customInitFunctions();
  }


}
