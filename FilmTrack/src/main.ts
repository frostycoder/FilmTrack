import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppConfig} from './app/app-config';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';


AppConfig.apiUrl = environment.apiUrl;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
