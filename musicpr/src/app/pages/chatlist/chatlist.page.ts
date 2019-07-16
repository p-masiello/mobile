import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Chat} from '../../model/chat.model';
import {ActivatedRoute} from '@angular/router';
import {Utente} from '../../model/utente.model';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
    chats$: Observable<Chat>;

  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {

  }

}
