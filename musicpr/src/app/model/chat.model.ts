import {Utente} from './utente.model';


export class Chat {
    id: string;
    opener: Utente;
    partecipant: Utente;
}
