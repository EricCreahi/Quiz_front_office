export type StorageKeys =
  | 'auth'
  | 'questions'
  | 'cgu'
  | 'liste-tampon'
  | 'current-quiz'
  | 'liste-cocher';
export type QuizView = 'HOME' | 'CHALLENGE' | 'RESULT';

export enum ResponseStatus {
  SUCCES = 'succes',
  ECHEC = 'echec',
}

export type Response<T> = {
  status: ResponseStatus;
  message: string | null;
  nbreData: number;
  data: Array<T> | null;
  oneData: T | null;
};
