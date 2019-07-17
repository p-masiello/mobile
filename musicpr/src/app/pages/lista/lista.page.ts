import { Component, OnInit, ViewChild } from '@angular/core';
import {Evento, GENERE} from '../../model/evento.model';
import {Observable} from 'rxjs';
import {EventoServiceService} from '../../services/evento.service';
import {tap} from 'rxjs/operators';
import {EditaeventoPage} from '../editaevento/editaevento.page';
import {ModalController, NavParams} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

    private eventi$: Observable<Evento[]>;



  constructor(private eventoService: EventoServiceService,
              private modalController: ModalController,
              private navParams: NavParams
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
    async createEvento() {
        const evento = new Evento();
        evento.genere = new GENERE() ;
        const modal = await this.modalController.create({
            component: EditaeventoPage,
            componentProps: {appParam: evento}
        });
        modal.onDidDismiss().then((detail: OverlayEventDetail) => {
            if (detail !== null && detail.data !== undefined) {
                this.eventoService.createEvento(detail.data);
            } else {
                console.log('cancel button pressed');
            }
        });

        await modal.present();
    }
 }

