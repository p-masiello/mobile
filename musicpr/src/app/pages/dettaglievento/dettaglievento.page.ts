import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/observable';

import 'rxjs/add/observable/of';
import {Evento} from '../../model/evento.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EventoServiceService} from '../../services/evento.service';


@Component({
  selector: 'app-dettaglievento',
  templateUrl: './dettaglievento.page.html',
  styleUrls: ['./dettaglievento.page.scss'],
})
export class DettaglieventoPage implements OnInit {

    private evento$: Observable<Evento>;


     pay = true;
    crow = true; // CREARE FUNZIONE PER SETTARLI....COME????
    add = true;






    constructor(private route: ActivatedRoute,
                private eventoService: EventoServiceService) {
    }

    ngOnInit()  {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.evento$ = this.eventoService.getEvento(parseInt(params.get('idevento'), 0));

        });

        this.setButton();




    }

    setButton() {
        if (this.evento$) {
            console.log('vediamo');

        }

    }



    }






