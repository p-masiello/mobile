
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


import { Evento } from 'src/app/model/evento.model';

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
}
