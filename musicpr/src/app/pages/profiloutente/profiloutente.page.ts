import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonItemSliding,
  MenuController,
  ModalController,
  NavController,
  NavParams
} from '@ionic/angular';
import {Observable} from 'rxjs';
import {Evento} from '../../model/evento.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventoServiceService} from '../../services/evento.service';
import {EditaeventoPage} from '../editaevento/editaevento.page';
import {OverlayEventDetail} from '@ionic/core/dist/types/utils/overlays-interface';
import {Utente} from '../../model/utente.model';
import {ParamMap} from '@angular/router';
import {UtenteServiceService} from '../../services/utente.service';
import {Lingua, LinguaService} from '../../services/lingua.service';
import {TranslateService} from '@ngx-translate/core';





@Component({
  selector: 'app-profiloutente',
  templateUrl: './profiloutente.page.html',
  styleUrls: ['./profiloutente.page.scss'],
})
export class ProfiloutentePage implements OnInit {
  private eventi$: Observable<Evento[]>;
  private lingue: Lingua[];
  private profiloFormModel: FormGroup;
  private utente: Utente;

  private deleteTitle: string;
  private messageTitle: string;
  private deleteButton: string;
  private cancelButton: string;

  constructor(private menu: MenuController,
              private formBuilder: FormBuilder,
              private modalController: ModalController,
              private alertController: AlertController,
              private navParams: NavParams,
              private linguaService: LinguaService,
              private translateService: TranslateService,
              private eventoService: EventoServiceService,
              private utenteService: UtenteServiceService,
              private navController: NavController,
  ) { }

  ngOnInit() {   this.utenteService.getUtente().subscribe((utente) => {
    this.eventi$ = this.eventoService.findByCreatore(utente.id); // dovrebbe funzionare


  });
                 this.lingue = this.linguaService.getLingue();
                 this.profiloFormModel = this.formBuilder.group({
                    foto: [''],
                    username: ['', Validators.compose([
                      Validators.required
                    ])],
                    descrizione: [''],
                   linguaPreferita: ['', Validators.compose([
                      Validators.required
                    ])]
                  });

                 this.linguaService.getLinguaAttuale().subscribe((lingua) => {
      this.profiloFormModel.patchValue({linguaPreferita: lingua});
    }); // da modificare patchValue qui sotto
                 this.utenteService.getUtente().subscribe((utente) => {
      this.profiloFormModel.patchValue({foto: utente.foto, username: utente.username, descrizione: utente.descrizione});
      this.utente = utente;
    });
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
  onSubmit(): void {
    this.translateService.use(this.profiloFormModel.value.linguaPreferita);
    this.linguaService.updateLingua(this.profiloFormModel.value.linguaPreferita);
    this.utente.foto = this.profiloFormModel.value.foto;
    this.utente.username = this.profiloFormModel.value.username;
    this.utente.descrizione = this.profiloFormModel.value.descrizione;
    this.utenteService.updateProfilo(this.utente).subscribe((nuovoUtente: Utente) => {
      this.navController.back();
    });
  }

  cancel() {
    this.navController.back();
  }
  logout() {
    this.utenteService.logout();
    this.navController.navigateRoot('login');
  }

}
