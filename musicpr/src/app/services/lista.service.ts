import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Evento} from 'src/app/model/evento.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
 })

export class ListaService {

    private eventiUrl = 'api/eventi';  // URL to web api

    constructor(private http: HttpClient) {
    }



 }

