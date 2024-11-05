import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from '../../models';
import { loginAction, logoutAction } from '../actions';

export const authReducer = createReducer(
  initialAuthState,
  // Connexion
  on(loginAction, (state: AuthState, { matricule }) => ({
    ...state,
    matricule,
    loggedIn: true,
  })),
  // Deconnexion
  on(logoutAction, () => initialAuthState)
);
