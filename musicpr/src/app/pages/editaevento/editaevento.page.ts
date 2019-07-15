import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventoServiceService} from '../../services/evento.service';
import {Evento} from '../../model/evento.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editaevento',
  templateUrl: './editaevento.page.html',
  styleUrls: ['./editaevento.page.scss'],
})
export class EditaeventoPage implements OnInit {
  @Input() evento: Evento;

  constructor(private route: ActivatedRoute,
              private eventoService: EventoServiceService,
              private location: Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.eventoService.updateEvento(this.evento)
        .subscribe(() => this.goBack());
  }
  getEvento(): void {
    this.eventoService.getEvento(13)
        .subscribe(evento => this.evento = evento);

  }

}
