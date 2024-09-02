import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Type} from 'biit-ui/inputs';
import {BiitLogin} from "biit-ui/models";
import {LoginErrors} from "./models/LoginErrors";
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'biit-login',
  templateUrl: './biit-login.component.html',
  styleUrls: ['./biit-login.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/login', alias: "login"}
  }]
})
export class BiitLoginComponent {

  @Input() login: BiitLogin;

  @Output() onLogin: EventEmitter<BiitLogin>;
  @Output() onNotRemember: EventEmitter<void>;
  @Output() onResetPassword: EventEmitter<string>;

  protected readonly keyId: string;
  protected readonly Type = Type;
  protected readonly LoginError = LoginErrors;

  protected resetView = false;
  protected resetEmail = "";

  protected loginErrors: Map<LoginErrors, string>;

  constructor(public translocoService: TranslocoService) {
    if (!this.login) {
      this.login = new BiitLogin();
    }
    this.onLogin = new EventEmitter<BiitLogin>();
    this.onNotRemember = new EventEmitter<void>();
    this.onResetPassword = new EventEmitter<string>();
    this.loginErrors = new Map<LoginErrors, string>();
    const generatedId: number = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    this.keyId = `${generatedId < 10 ? '0' : ''}${generatedId}`
  }

  protected performLogin(): void {
    if (this.validateLogin()) {
      //Trim username
      if (this.login && this.login.username) {
        this.login.username = this.login.username.trim();
      }
      this.onLogin.emit(this.login)
    }
  }

  private validateLogin(): boolean {
    this.loginErrors.clear();
    if (!this.login.username || !this.login.username.length) {
      this.loginErrors.set(LoginErrors.USERNAME, this.translocoService.translate('login.username-empty'));
    }
    if (!this.login.password || !this.login.password.length) {
      this.loginErrors.set(LoginErrors.PASSWORD, this.translocoService.translate('login.password-empty'));
    }
    return !this.loginErrors.size;
  }

  protected performResetPassword(): void {
    if (this.validateResetPassword()) {
      this.onResetPassword.emit(this.resetEmail);
      this.restartView();
    }
  }

  private validateResetPassword(): boolean {
    this.loginErrors.clear();
    if (!this.resetEmail.length) {
      this.loginErrors.set(LoginErrors.EMAIL, this.translocoService.translate('login.email-empty'));
    }
    return !this.loginErrors.get(LoginErrors.EMAIL);
  }

  restartView() {
    this.resetView = false;
    this.resetEmail = "";
  }

  protected readonly LoginErrors = LoginErrors;
}
