import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'web-file-polyfill';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()],})
  .catch(err => console.error(err));
