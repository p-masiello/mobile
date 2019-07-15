import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Evento} from '../../model/evento.model';
import {EventoServiceService} from '../../services/evento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {
  private evento$: Observable<Evento>;
  constructor(private route: ActivatedRoute,
              private eventoService: EventoServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.evento$ = this.eventoService.getEvento(parseInt(params.get('id'), 0));

    });
  }

}
