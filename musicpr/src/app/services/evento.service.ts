
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Evento } from 'src/app/model/evento.model';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})

export class EventoServiceService {

    private eventiUrl = 'api/eventi';  // URL to web api

    constructor(private http: HttpClient) {

    }
    list(): Observable<Evento[]> {

        return this.http.get<Evento[]>(this.eventiUrl);
    }

    getEvento(idevento: number): Observable<Evento> {
        const url = `${this.eventiUrl}/${idevento}`;
        return this.http.get<Evento>(url);
    }

}
