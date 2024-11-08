// import { quizDB } from '../db';

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export const selectRandomQuiz = (): Questionnaire => {
//   const quizId = generateRandomNumber(1, 8);
//   const questionnaire: Questionnaire = quizDB.find(
//     (q) => q.id == quizId
//   ) as Questionnaire;

//   return questionnaire;
// };

export function shuffleOptions<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
  }
  return array;
}
