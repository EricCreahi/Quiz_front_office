import { Question } from './question.model';

export type Questionnaire = {
  id: number;
  label: string;
  createdDate: string;
  enabled: boolean;
  questions: Array<Question>; // Liste des questions associées
};
