
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


import { Evento } from 'src/app/model/evento.model';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root',
})

export class EventoServiceService {

    private eventiUrl = 'api/eventi';  // URL to web api

    constructor(private http: HttpClient, private messageService: MessageService) {

    }
    list(): Observable<Evento[]> {

        return this.http.get<Evento[]>(this.eventiUrl);
    }

    getEvento(idevento: number): Observable<Evento> {
        const url = `${this.eventiUrl}/?idevento=${idevento}`;
        return this.http.get<Evento>(url).pipe(
            tap(_ => this.log(`fetched hero id=${idevento}`)),
            catchError(this.handleError<Evento>(`getHero id=${idevento}`))
        );
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of (result as T);
        };
    }
    private log(message: string) {
        this.messageService.add(`EventoServiceService: ${message}`);
    }

}
