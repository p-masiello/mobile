import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { URL } from '../constants';
import { Chat } from '../model/chat.model';
import { Messaggio } from '../model/messaggio.model';

@Injectable()
export class ChatService {

    constructor(private http: HttpClient) {
    }

    sendMessage(m: Messaggio) {
        return this.http.post(URL.STORE.MESSAGE, m);
    }


    getChatList(userId: number): Observable<Chat[]> {
        const apiURL = `${URL.CHATLIST}/${userId}`;
        return this.http.get<Array<Chat>>(apiURL);
    }

    getMessages(opId: number, partId: number, page: number): Observable<Messaggio[]> {
        const apiURL = `${URL.CHAT}/${opId}/${partId}/${page}`;
        return this.http.get<Array<Messaggio>>(apiURL);
    }
}
