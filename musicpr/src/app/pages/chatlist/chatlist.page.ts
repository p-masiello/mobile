import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Chat} from '../../model/chat.model';
import {ActivatedRoute} from '@angular/router';
import {Utente} from '../../model/utente.model';
import {UtenteServiceService} from '../../services/utente.service';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
    chats$: Observable<Chat[]>;

  constructor(private route: ActivatedRoute,
              private chatService: ChatService,
              private utenteService: UtenteServiceService) { }

  ngOnInit() {
  this.utenteService.getUtente().subscribe((utente: Utente) => {
    this.chats$ = this.chatService.getChatList(utente.id);

    });
  }

}



