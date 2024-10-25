import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalStorageService } from './localstorage.service';
import { AuthState } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StatePersistService {
  constructor(private store: Store<{ user: AuthState }>) {
    this.store.select('user').subscribe((state) => {
      LocalStorageService.setItem('auth', state);
    });
  }
}
