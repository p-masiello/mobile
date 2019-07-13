import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Evento} from './model/evento.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const eventi = [
            { idevento: 11 ,
                nomeevento: 'Metallica',
                sottotitolo : 'Master of puppets',
                descrizione: 'I Metallica tornano ad emozionare le platee di tutto il mondo con il loro tour, ' +
                    'partecipa anche tu!!!',
            },
            { idevento: 12,
                nomeevento: 'MetallicA',
                sottotitolo : 'Master of puppets',
                descrizione: 'I MetallicA tornano ad emozionare le platee di tutto il mondo con il loro tour, ' +
                    'partecipa anche tu!!!',
            },
            { idevento: 13,
                nomeevento: 'Antonio',
                sottotitolo : 'Lina mi vida',
                descrizione: 'I Metallica tornano ad emozionare le platee di tutto il mondo con il loro tour, ' +
                    'partecipa anche tu!!!',
            },




        ];


        return{eventi};
 }
}
