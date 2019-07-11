import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Observable} from 'rxjs';
import {Evento} from '../../model/evento.model';

@Component({
  selector: 'app-profiloutente',
  templateUrl: './profiloutente.page.html',
  styleUrls: ['./profiloutente.page.scss'],
})
export class ProfiloutentePage implements OnInit {
  private eventi$: Observable<Evento[]>;
  evento: any;

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }


}
