import { QuestionOption } from './question-option.model';

export type Question = {
  sousQuestionId: number;
  libelle_Sous_Question: string;
  numero_Sous_Question: number;
  estVisible: boolean;
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
