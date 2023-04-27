import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Type} from 'biit-ui/inputs';
import {BiitLogin} from "biit-ui/models";
import {LoginErrors} from "./models/LoginErrors";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'biit-login',
  templateUrl: './biit-login.component.html',
  styleUrls: ['./biit-login.component.scss']
})
export class BiitLoginComponent {

  @Input() login: BiitLogin

  @Output() onLogin: EventEmitter<BiitLogin>
  @Output() onNotRemember: EventEmitter<void>

  protected readonly keyId: string;
  protected readonly Type = Type;
  protected readonly LoginError = LoginErrors;

  protected loginErrors: Map<LoginErrors, string>;

  constructor(private translateService: TranslateService) {
    this.login = new BiitLogin();
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
      this.translateService.get('login.username-empty').subscribe(translation => this.loginErrors.set(LoginErrors.USERNAME, translation));
    }
    if (!this.login.password || !this.login.password.length) {
      this.translateService.get('login.password-empty').subscribe(translation => this.loginErrors.set(LoginErrors.PASSWORD, translation));
    }
    return !this.loginErrors.size;
  }

  protected readonly LoginErrors = LoginErrors;
}
