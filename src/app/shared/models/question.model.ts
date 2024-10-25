import { QuestionOption } from './question-option.model';

export type Question = {
  id: number;
  label: string;
  createdDate: string;
  questionnaireId: number; // Identifiant du questionnaire
  correctAnswerId: number; // Identifiant de l'option correcte
  options: Array<QuestionOption>; // Liste des options de questions, 4 max
};
