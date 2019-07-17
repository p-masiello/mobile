import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';
import {Utente} from './model/utente.model';
import {BehaviorSubject} from 'rxjs';
import {UtenteServiceService} from './services/utente.service';
import {LinguaService} from "./services/lingua.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
  private utente$: BehaviorSubject<Utente>;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private linguaService: LinguaService,
    private utenteService: UtenteServiceService,

  ) {
    this.initializeApp();
  }
  ngOnInit(): void {
    this.utente$ = this.utenteService.getUtente();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initTranslate();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    const linguaPreferita = this.linguaService.getLinguaPreferita();
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua != null) {
        this.translate.use(lingua);
      } else {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }
}
