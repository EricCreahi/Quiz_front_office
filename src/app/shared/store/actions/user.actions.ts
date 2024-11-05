import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  '[Auth] Login',
  props<{ matricule: string; nom: string; prenoms: string }>()
);

export const logoutAction = createAction('[Auth] Logout');
