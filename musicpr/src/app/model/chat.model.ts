import {Utente} from './utente.model';


export class Chat {
    id: string;
    mittente: Utente;
    destinatario: Utente;
}
