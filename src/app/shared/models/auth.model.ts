export type AuthState = {
  email: string | null;
  nom: string | null;
  prenoms: string | null;
  loggedIn: boolean;
};

export const initialAuthState: AuthState = {
  nom: null,
  prenoms: null,
  email: null,
  loggedIn: false,
};
