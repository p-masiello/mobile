
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import 'rxjs/add/operator/map';

import { Evento } from 'src/app/model/evento.model';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export interface Evento {
    id: number;
    nome: string;
    sottotitolo: string;
    descrizione: string;
    // data: date; da vedere
    genere: string;
    latitudine: string;
    longitudine: string;
    // foto: Foto;
}


@Injectable({
    providedIn: 'root',
})

export class EventoServiceService {

    private eventiUrl = 'api/eventi';  // URL to web api DA MODIFICARE TUTTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

    constructor(private http: HttpClient, private messageService: MessageService) {

    }

    list(): Observable<Evento[]> {
        return this.http.get<Evento[]>(this.eventiUrl)
            .pipe(
                tap(() => this.log('fetched eventi')),
                catchError(this.handleError<Evento[]>('list', []))
            );
    }


    getEvento(id: number): Observable<Evento> {
        const url = `${this.eventiUrl}/${id}`;
        return this.http.get<Evento>(url);

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`EventoServiceService: ${message}`);
    }

    addEvento(evento: Evento): Observable<Evento> {
        return this.http.post<Evento>(this.eventiUrl, evento, httpOptions).pipe(
            tap((newEvento: Evento) => this.log(`added evento w/ id=${newEvento.idevento}`)),
            catchError(this.handleError<Evento>('addHero'))
        );
    }

    updateEvento(evento: Evento): Observable<any> {
        return this.http.put(this.eventiUrl, evento, httpOptions).pipe(
            tap(_ => this.log(`updated evento id=${evento.idevento}`)),
            catchError(this.handleError<any>('updateHero'))
        );

    }
}
