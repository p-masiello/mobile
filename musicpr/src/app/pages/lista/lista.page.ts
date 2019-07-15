import { Component, OnInit, ViewChild } from '@angular/core';
import {Evento} from '../../model/evento.model';
import { IonInfiniteScroll } from '@ionic/angular';
import {Foto} from '../../model/foto.model';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import {EventoServiceService} from '../../services/evento.service';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

    private eventi$: Observable<Evento[]>;



  constructor(private eventoService: EventoServiceService
              ) {

  }

  ngOnInit() {
      this.eventi$ = this.eventoService.list();

  }
    doRefresh(event) {
        this.eventi$ = this.eventoService.list()
            .pipe(tap(() => {
                event.target.complete();
            }));
    }
 }

