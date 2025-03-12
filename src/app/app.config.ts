import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './state_management/user/user.reducer';
import { UserEffects } from './state_management/user/user.effect';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideEffects(UserEffects),
    provideStore({ users: userReducer }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouter(routes),
    provideAnimations(),
  ],
};
