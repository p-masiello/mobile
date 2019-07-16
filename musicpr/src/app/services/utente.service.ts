import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import 'rxjs/add/operator/map';
import {URL} from '../constants';
import {Utente} from '../model/utente.model';



@Injectable({
    providedIn: 'root',
})

export class UtenteServiceService {



    constructor(private http: HttpClient, ) {

    }

    findByIdUtente(creatoreid: number): Observable<Utente> {
        const apiURL = `${URL.UTENTE}/${creatoreid}`;
        return this.http.get<Utente>(apiURL);
    }
}
