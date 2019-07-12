import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Evento} from './model/evento.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const eventi = [
            { idevento: 11, nomeevento: 'Dr Nice', sottotitolo : 'cane',
                descrizione: 'string',
            },



];


        return{eventi};
 }
}
