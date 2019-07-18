import {Chat} from './chat.model';
import {Utente} from './utente.model';

export class Messaggio {
    id: number;
    relativoa: Chat;
    author: Utente;
    body: string;
    date: number;
    hour: string;
    mine: boolean;
}
