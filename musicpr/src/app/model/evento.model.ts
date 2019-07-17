import { Foto } from './foto.model';
import {Utente} from './utente.model';

export class Evento {
    id: number;
    nome: string;
    sottotitolo: string;
    descrizione: string;
     data: Date;
    genere: GENERE;
    latitudine: string;
    longitudine: string;
    foto: Foto;
    creatore: Utente;
    partecipanti: number;


} // VEDERE DI REALIZZARE INTERFACCIA
// tslint:disable-next-line:class-name
export class TIPOLOGIA_EVENTO_A_PAGAMENTO {
    prezzo: number;
    numerobiglietti: number;
}
// tslint:disable-next-line:class-name
export class TIPOLOGIA_EVENTO_CROWFOUNDING {
    sommarichiesta: number;
    sommaraggiunta: number;
    donatori: Utente;
}
export const TIPOLIGA_EVENTO_GRATUITO = 'GRATUITO';

export class GENERE {
    pagamento = TIPOLOGIA_EVENTO_A_PAGAMENTO;
    crowfounding = TIPOLOGIA_EVENTO_CROWFOUNDING;
    gratuito = TIPOLIGA_EVENTO_GRATUITO;
}
