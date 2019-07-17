import { Component, OnInit } from '@angular/core';
import {UtenteServiceService} from "../../services/utente.service";
import {AlertController, Events} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Account = {name: '', surname: '', username: "", email: "", password: ""};

  loginTitle: string;
  loginSubTitle: string;

  constructor(private utenteService: UtenteServiceService,
              public events: Events,
              private alertCtrl: AlertController,
              private translateService: TranslateService,) { }

  ngOnInit() {
  }

}
