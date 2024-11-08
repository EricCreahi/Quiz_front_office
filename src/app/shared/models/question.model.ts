import { QuestionOption } from './question-option.model';

export type Question = {
  sousQuestionId: number;
  libelle_Sous_Question: string;
  numero_Sous_Question: number;
  estVisible: boolean;
  questionId: number;
  choixes: Array<QuestionOption>;
};
