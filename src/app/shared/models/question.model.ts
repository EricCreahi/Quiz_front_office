import { QuestionOption } from './question-option.model';

export type Question = {
  sousQuestionId: number;
  libelle_Sous_Question: string;
  numero_Sous_Question: number;
  estVisible: boolean;
  /**
   * Correspond à l'ID du questionnaire lié
   */
  questionId: number;
  choixes: Array<QuestionOption>;
};

export type ChoixReponseReq = {
  date_Cocher: string;
  matricule: string;
  choixId: number;
  position: number;
};

export type UpdateChoixReponseReq = {
  cocherTamponId: number;
  choixId: number;
};

export type ChoixReponseResponse = {
  choixId: number;
  libelle_Choix: string;
  estVisible: boolean;
  sousQuestionId: number;
  libelle_Sous_Question: string;
  numero_Sous_Question: number;
  cocherTamponId: number;
};

export type QuizDay = {
  questionId: number;
  libelle_Question: string;
  estVisible: boolean;
};

export type UserScore = {
  matricule: string;
  nom_Pers: string;
  prenoms_Pers: string;
  contact: string;
  fonction: string;
  direction: string;
  email: string;
  statut: string;
  totalNote: number;
};

export type UserRanking = {
  matricule: string;
  nom_Pers: string;
  prenoms_Pers: string;
  contact: string;
  fonction: string;
  direction: string;
  email: string;
  statut: string;
  totalNote: number;
};
