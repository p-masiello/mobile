import { Foto } from './foto.model';
import {Utente} from './utente.model';

export class Evento {
    id: number;
    nome: string;
    sottotitolo: string;
    descrizione: string;
     // data: date; da vedere
    genere: string;
    latitudine: string;
    longitudine: string;
    foto: Foto;
    creatore: Utente;
    partecipanti: number;


}
