import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { GAppComponent } from './app/app.component';

bootstrapApplication(GAppComponent, appConfig)
  .catch((err) => console.error(err));
