import { createSelector } from '@ngrx/store';
import { AuthState } from '../../models';

export const selectUserState = (state: any) => state.auth;
export const selectUser = createSelector(
  selectUserState,
  (auth: AuthState) => auth
);
