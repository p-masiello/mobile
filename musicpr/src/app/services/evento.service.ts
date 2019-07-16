
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import 'rxjs/add/operator/map';
import {URL} from '../constants';

import { Evento } from 'src/app/model/evento.model';



@Injectable({
    providedIn: 'root',
})

export class EventoServiceService {



    constructor(private http: HttpClient, ) {

    }

    list(): Observable<Evento[]> {
        return this.http.get<Evento[]>(URL.EVENTI);

    }


    findById(eventoId: number): Observable<Evento> {
        const apiURL = `${URL.EVENTI}/${eventoId}`;
        return this.http.get<Evento>(apiURL);
    }


}
