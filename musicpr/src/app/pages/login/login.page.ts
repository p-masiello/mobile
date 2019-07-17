import { Component, OnInit } from '@angular/core';
import {Account, UtenteServiceService} from '../../services/utente.service';
import {AlertController, Events, NavController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Utente} from '../../model/utente.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;



  constructor(private  formBuilder: FormBuilder,
              private utenteService: UtenteServiceService,
              private alertController: AlertController,
              private navController: NavController,
              private alertCtrl: AlertController,
              private translateService: TranslateService ) { }

  ngOnInit() {this.loginFormModel = this.formBuilder.group({
    username: ['musicpr', Validators.compose([
      Validators.required
    ])],
    password: ['musicpr', Validators.compose([
      Validators.required
    ])]
  });
              this.initTranslate();
  }
  onLogin() {
    const account: Account = this.loginFormModel.value;
    this.utenteService.login(account).subscribe((utente: Utente) => {
          this.loginFormModel.reset();
          this.navController.navigateRoot('tabs');
        },
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            console.error('login request error: ' + err.status);
            this.showLoginError();
          }
        });
  }
  async showLoginError() {
    const alert = await this.alertController.create({
      header: this.loginTitle,
      message: this.loginSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }


  private initTranslate() {
    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }

}
