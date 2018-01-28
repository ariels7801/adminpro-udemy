import {Component, ElementRef, Inject, OnInit} from '@angular/core';

import { SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _ajustes: SettingsService) {
  }

  ngOnInit() {
  }

  cambiarColor(tema: string, link: any) {

    this.aplicaCheck(link);
    this._ajustes.aplicarTema(tema);

  }

  aplicaCheck(link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
