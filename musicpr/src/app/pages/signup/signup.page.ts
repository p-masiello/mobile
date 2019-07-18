import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtenteServiceService} from "../../services/utente.service";
import {AlertController, NavController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";
import {Utente} from "../../model/utente.model";
import {HttpErrorResponse} from "@angular/common/http";
export interface Account {
  nome: string;
  cognome: string;
  username: string;
  email: string;
  password: string;


}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private signupFormModel: FormGroup;
  private signupTitle: string;
  private signupSubTitle: string;

  constructor(private  formBuilder: FormBuilder,
              private utenteService: UtenteServiceService,
              private alertController: AlertController,
              private navController: NavController,
              private alertCtrl: AlertController,
              private translateService: TranslateService ) { }

  ngOnInit() {this.signupFormModel = this.formBuilder.group({
    nome: ['', Validators.compose([
      Validators.required
    ])],
    cognome: ['', Validators.compose([
      Validators.required
    ])],

    username: ['', Validators.compose([
      Validators.required
    ])],
    email: ['', Validators.compose([
      Validators.required
    ])],
    password: ['', Validators.compose([
      Validators.required
    ])]
  });
  }
  onSignUp() {
    const account: Account = this.signupFormModel.value;
    this.utenteService.signin(account).subscribe((utente: Utente) => {
          this.signupFormModel.reset();
          this.navController.navigateRoot('tabs');
        },
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            console.error('login request error: ' + err.status);
            this.showSignupError();
          }
        });
  }








  async showSignupError() {
    const alert = await this.alertController.create({
      header: this.signupTitle,
      message: this.signupSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }


}
