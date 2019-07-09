  /*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tutta roba da copiare nei service

// import {URL} from '../constants';
import { Evento } from '../model/evento.model';
import {Observable} from 'rxjs';

@Injectable()
export class UtenteService {
    constructor(private http: HttpClient) {

    }
// funzione per il login DA COPIARE TUTTO AL PROF CAMBIANDO NOMI
/* login(account: Account): Observable<Utente> {
        return this.http.post<Utente>(URL.LOGIN, account, {observe: 'response'}).pipe(
            map((resp: HttpResponse<Utente>) => {
                const token = resp.headers.get(X_AUTH);
                this.storage.set(AUTH_TOKEN, token);
                this.authToken = token;
                // Utente memorizzato nello storage in modo tale che se si vuole cambiare il
                // profilo dell'utente stesso non si fa una chiamata REST.
                this.storage.set(UTENTE_STORAGE, resp.body);
                // update dell'observable dell'utente
                this.utente$.next(resp.body);
                this.loggedIn$.next(true);
                return resp.body;
            }));*/





