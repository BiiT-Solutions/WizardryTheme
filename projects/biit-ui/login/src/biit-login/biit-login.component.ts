import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Type} from 'biit-ui/inputs';
import {BiitLogin} from "biit-ui/models";
import {LoginErrors} from "./models/LoginErrors";
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";
import {SignUpRequest} from "./models/sign-up-request";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'biit-login',
  templateUrl: './biit-login.component.html',
  styleUrls: ['./biit-login.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/login', alias: "login"}
  }]
})
export class BiitLoginComponent implements OnInit {

  @Input() login: BiitLogin;
  @Input() allowSignUp = false;
  @Input() signUpGeneratedPassword = false;
  @Input() signUpGeneratedUsername = true;
  @Input() teams: { key: any, label: string }[];
  @Input() checkUserName: (username: string) => Observable<void>;

  @Output() onLogin: EventEmitter<BiitLogin>;
  @Output() onNotRemember: EventEmitter<void>;
  @Output() onResetPassword: EventEmitter<string>;
  @Output() onSignUp: EventEmitter<SignUpRequest>;

  protected readonly keyId: string;
  protected readonly Type = Type;
  protected readonly LoginError = LoginErrors;

  protected signUpView = false;
  protected signUpData: SignUpRequest = new SignUpRequest();
  protected resetView = false;
  protected resetEmail = "";
  protected dumbTeam: { key: any, label: string };

  protected loginErrors: Map<LoginErrors, string>;
  protected readonly LoginErrors = LoginErrors;
  protected readonly PWD_MIN_LENGTH = 12
  protected readonly PWD_MAX_LENGTH = 25

  constructor(public translocoService: TranslocoService) {
    if (!this.login) {
      this.login = new BiitLogin();
    }
    this.onLogin = new EventEmitter<BiitLogin>();
    this.onNotRemember = new EventEmitter<void>();
    this.onResetPassword = new EventEmitter<string>();
    this.onSignUp = new EventEmitter<SignUpRequest>();
    this.loginErrors = new Map<LoginErrors, string>();
    const generatedId: number = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    this.keyId = `${generatedId < 10 ? '0' : ''}${generatedId}`
  }

  ngOnInit() {
    if (this.allowSignUp) {
      this.signUpView = true;
    }
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
    this.loginErrors.clear();

    this.resetView = false;
    this.resetEmail = "";

    this.signUpView = false;
    this.signUpData = new SignUpRequest();
  }

  protected performSignUp(): void {
    this.signUpData.team = this.dumbTeam?.key;
    if (this.validateSignUp()) {
      if (this.signUpGeneratedPassword) {
        this.signUpData.password = this.generatePassword();
      }
      if (this.dumbTeam) {
        this.signUpData.team = this.dumbTeam.key;
      }
      this.onSignUp.emit(this.signUpData);
    }
  }

  private validateSignUp(): boolean {
    this.loginErrors.clear();
    if (!this.signUpData.name || !this.signUpData.name.length) {
      this.loginErrors.set(LoginErrors.NAME, this.translocoService.translate('login.name-empty'));
    }
    if (!this.signUpData.lastname || !this.signUpData.lastname.length) {
      this.loginErrors.set(LoginErrors.LASTNAME, this.translocoService.translate('login.lastname-empty'));
    }
    if (!this.signUpData.email || !this.signUpData.email.length) {
      this.loginErrors.set(LoginErrors.EMAIL, this.translocoService.translate('login.email-empty'));
    }
    if (!this.signUpGeneratedPassword && (!this.signUpData.password || !this.signUpData.password.length)) {
      this.loginErrors.set(LoginErrors.PASSWORD, this.translocoService.translate('login.password-empty'));
    }
    if (!this.signUpGeneratedUsername && (!this.signUpData.username || !this.signUpData.username.length)) {
      this.loginErrors.set(LoginErrors.PASSWORD, this.translocoService.translate('login.username-empty'));
    }
    return !this.loginErrors.size;
  }

  public generatePassword(): string {
    const pattern: RegExp = /[A-Za-z\d@$!%*?&]/;
    const randomSize: number = Math.floor(Math.random() * (this.PWD_MAX_LENGTH - this.PWD_MIN_LENGTH + 1))
      + this.PWD_MIN_LENGTH;
    let password: string = '';
    while (password.length < randomSize) {
      const result: string = String.fromCharCode(this.randomChar());
      if (pattern.test(result)) {
        password += result;
      }
    }
    return password;
  }

  private randomChar(): number {
    if (window.crypto && window.crypto.getRandomValues) {
      const buffer: Uint8Array = new Uint8Array(1);
      window.crypto.getRandomValues(buffer);
      return buffer[0];
    } else {
      return Math.floor(Math.random() * 256);
    }
  }


  protected checkUsernameExists(): void {
    if (this.signUpGeneratedUsername && this.signUpData.username && this.signUpData.username.length) {
      this.checkUserName(this.signUpData.username).subscribe({
        next: (): void => {
        },
        error: (error): void => {
          if (error instanceof HttpErrorResponse) {
            switch (error.status) {
              case 409:
              case 400:
                this.loginErrors.set(this.LoginError.USERNAME, this.translocoService.translate('login.username-exists'));
                break;
              default:
                throw error;
            }
          }
        }
      });
    }
  }
}
