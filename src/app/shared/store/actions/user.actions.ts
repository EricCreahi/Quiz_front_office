import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  '[Auth] Login',
  props<{ email: string; nom: string; prenoms: string }>()
);

export const logoutAction = createAction('[Auth] Logout');
