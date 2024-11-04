import { OverlayModule } from '@angular/cdk/overlay';
import { NgOptimizedImage } from '@angular/common';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideLottieOptions } from 'ngx-lottie';
import { routes } from './app.routes';
import { LocalStorageService } from './shared/service/localstorage.service';
import { StatePersistService } from './shared/service/state-persist.service';
import { authReducer } from './shared/store/reducers/auth.reducers';

export function loadState() {
  return () => {
    const savedState = LocalStorageService.getItem('auth');
    return savedState ? { user: savedState } : {};
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: APP_INITIALIZER, useFactory: loadState, multi: true },
    importProvidersFrom(StoreModule.forRoot({ user: authReducer })),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
      })
    ),
    importProvidersFrom(NgOptimizedImage),
    importProvidersFrom(OverlayModule),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    StatePersistService,
  ],
};
