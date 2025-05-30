import { OverlayModule } from '@angular/cdk/overlay';
import { NgOptimizedImage } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { LocalStorageService } from './shared/service/localstorage.service';
import { LucideAngularModule, SquareUserRound, Volume, VolumeOff } from 'lucide-angular';

export function loadState() {
  return () => {
    const savedState = LocalStorageService.getItem('auth');
    return savedState ? { user: savedState } : {};
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadState, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    importProvidersFrom(NgOptimizedImage),
    importProvidersFrom(OverlayModule),
    provideAnimations(),
    provideToastr(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
};
