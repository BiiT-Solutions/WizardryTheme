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

  @Input() login: BiitLogin

  @Output() onLogin: EventEmitter<BiitLogin>
  @Output() onNotRemember: EventEmitter<void>

  protected readonly keyId: string;
  protected readonly Type = Type;
  protected readonly LoginError = LoginErrors;

  protected loginErrors: Map<LoginErrors, string>;

  constructor(public translocoService: TranslocoService) {
    if (!this.login) {
      this.login = new BiitLogin();
    }
    this.onLogin = new EventEmitter<BiitLogin>();
    this.onNotRemember = new EventEmitter<void>();
    this.loginErrors = new Map<LoginErrors, string>();
    const generatedId: number = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    this.keyId = `${generatedId < 10 ? '0' : '' }${generatedId}`
  }

  protected performLogin(): void {
    if (this.validate()) {
      this.onLogin.emit(this.login)
    }
  }
  private validate(): boolean {
    this.loginErrors.clear();
    if (!this.login.username || !this.login.username.length) {
      this.loginErrors.set(LoginErrors.USERNAME, this.translocoService.translate('login.username-empty'));
    }
    if (!this.login.password || !this.login.password.length) {
      this.loginErrors.set(LoginErrors.PASSWORD, this.translocoService.translate('login.password-empty'));
    }
    return !this.loginErrors.size;
  }

  protected readonly LoginErrors = LoginErrors;
}
