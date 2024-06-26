import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: 'BASE_API_URL', useValue: environment.baseUrl },
    provideHttpClient(),
  ],
};
