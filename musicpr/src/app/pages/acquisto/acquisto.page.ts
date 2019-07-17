import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EventoServiceService} from '../../services/evento.service';
import {Evento} from '../../model/evento.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-acquisto',
  templateUrl: './acquisto.page.html',
  styleUrls: ['./acquisto.page.scss'],
})
export class AcquistoPage implements OnInit {
  private evento$: Observable<Evento>;

  constructor(private route: ActivatedRoute,
              private eventoService: EventoServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.evento$ = this.eventoService.findById(parseInt(params.get('id'), 0));

    });
  }

}



