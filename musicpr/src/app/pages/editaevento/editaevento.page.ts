import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventoServiceService} from '../../services/evento.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {Evento, GENERE} from '../../model/evento.model';

@Component({
  selector: 'app-editaevento',
  templateUrl: './editaevento.page.html',
  styleUrls: ['./editaevento.page.scss'],
})
export class EditaeventoPage implements OnInit {

  private eventoFormModel: FormGroup;
  private evento: Evento;
  constructor(private formBuilder: FormBuilder,
              private modalController: ModalController,
              private navParams: NavParams,
              private eventoService: EventoServiceService) { }

  ngOnInit() {
    this.evento = this.navParams.data.appParam;
    this.eventoFormModel = this.formBuilder.group({
      foto: [this.evento.foto, Validators.compose([
        Validators.required
      ])],
      nome: [this.evento.nome, Validators.compose([
        Validators.required
      ])],
      sottotitolo: [this.evento.sottotitolo, Validators.compose([
        Validators.required
      ])],
      descrizione: [this.evento.descrizione, Validators.compose([
        Validators.required
      ])],
      genere: [this.evento.genere, Validators.compose([ // ci vuole picker per questo
        Validators.required
      ])],
      data: [this.evento.data, Validators.compose([
        Validators.required
      ])],
      ora: [this.evento.data, Validators.compose([
        Validators.required
      ])]
    });
  }
  async onSubmit() {
    this.evento.foto = this.eventoFormModel.value.foto;
    this.evento.nome = this.eventoFormModel.value.nome;
    this.evento.sottotitolo = this.eventoFormModel.value.sottotitolo;
    this.evento.descrizione = this.eventoFormModel.value.descrizione;
    this.evento.data = this.eventoFormModel.value.data;
  //  this.evento.ora = this.eventoFormModel.value.ora;

    await this.modalController.dismiss(this.evento);
  }
  async cancel() {
    await this.modalController.dismiss();
  }


}
