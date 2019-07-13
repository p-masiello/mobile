import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';


import {Evento} from '../../model/evento.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EventoServiceService} from '../../services/evento.service';

@Component({
  selector: 'app-dettaglievento',
  templateUrl: './dettaglievento.page.html',
  styleUrls: ['./dettaglievento.page.scss'],
})
export class DettaglieventoPage implements OnInit {
  @Input() evento: Evento;

  constructor(private route: ActivatedRoute,
              private eventoService: EventoServiceService,
             ) { }

  ngOnInit() {
    this.getEvento();
  }

   getEvento() {

     const idevento = +this.route.snapshot.paramMap.get('?idevento');
     this.eventoService.getEvento(idevento).subscribe(evento => this.evento = evento);

   }
  }



