import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/observable';
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



    disableButton;


    constructor(private route: ActivatedRoute,
                private eventoService: EventoServiceService) {
    }

    ngOnInit()  {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.evento$ = this.eventoService.findById(parseInt(params.get('id'), 0)); // ci vuole un pipe per settare dei booleani

        });
    }

    addPart() {
       // UPDATE ATTRIBUTO PARTECIPANTI
       this.disableButton = true;
    }



    }






