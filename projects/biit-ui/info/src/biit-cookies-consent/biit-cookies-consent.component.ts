import {Component, Input} from '@angular/core';
import {biitIcon} from "biit-icons-collection";
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";

@Component({
  selector: 'biit-cookies-consent',
  templateUrl: './biit-cookies-consent.component.html',
  styleUrls: ['./biit-cookies-consent.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/info', alias: "info"}
  }]
})
export class BiitCookiesConsentComponent {
  protected consent: boolean = false;
  constructor() {
    if (localStorage.getItem("cookies-consent") !== undefined) {
      this.consent = coerceBooleanProperty(localStorage.getItem("cookies-consent"));
    } else {
      this.consent = false;
    }
  }

  acceptCookies() {
    this.consent = true;
    localStorage.setItem("cookies-consent", 'true');
  }
}
