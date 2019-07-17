import { Component, OnInit } from '@angular/core';
import {AlertController, IonItemSliding, MenuController, ModalController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs';
import {Evento} from '../../model/evento.model';
import {FormBuilder} from '@angular/forms';
import {EventoServiceService} from '../../services/evento.service';
import {EditaeventoPage} from '../editaevento/editaevento.page';

@Component({
  selector: 'app-profiloutente',
  templateUrl: './profiloutente.page.html',
  styleUrls: ['./profiloutente.page.scss'],
})
export class ProfiloutentePage implements OnInit {
  private eventi$: Observable<Evento[]>;

  private deleteTitle: string;
  private messageTitle: string;
  private deleteButton: string;
  private cancelButton: string;

  constructor(private menu: MenuController,
              private formBuilder: FormBuilder,
              private modalController: ModalController,
              private alertController: AlertController,
              private navParams: NavParams,
              private eventoService: EventoServiceService) { }

  ngOnInit() {
  }
  async updateEvento(evento: Evento, sliding: IonItemSliding) {
    sliding.close();
    const modal = await this.modalController.create({
      component: EditaeventoPage,
      componentProps: {appParam: evento}
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
        this.eventoService.updateEvento(detail.data);
      } else {
        console.log('cancel button pressed');
      }
    });
    return await modal.present();
  }

  async deleteEvento(evento: Evento, sliding: IonItemSliding) {
    sliding.close();
    const alert = await this.alertController.create({
      header: this.deleteTitle,
      message: this.messageTitle,
      buttons: [
        {
          text: this.cancelButton,
          handler: () => {
            console.log('Annulla clicked');
          }
        },
        {
          text: this.deleteButton,
          handler: () => {
            this.eventoService.deleteEvento(evento);


          }
        }
      ]
    });

    await alert.present();
  }

}
