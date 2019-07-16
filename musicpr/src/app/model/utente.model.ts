// @ts-ignore
import { Foto } from './foto.model';

export class Utente {
    id: number;
    nome: string;
    cognome: string;
    username: string;
    email: string;
    descrizione: string;
    foto: Foto;
}
