import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UtenteServiceService} from '../../services/utente.service';

@Component({
  selector: 'app-dettagliorganizzatore',
  templateUrl: './dettagliorganizzatore.page.html',
  styleUrls: ['./dettagliorganizzatore.page.scss'],
})
export class DettagliorganizzatorePage implements OnInit {
    utente$: Observable<Utente>;

  constructor(private utenteService: UtenteServiceService,
              private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.utente$ = this.utenteService.findByIdUtente(parseInt(params.get('evento.creatore.id'), 0));
    });

}

}
