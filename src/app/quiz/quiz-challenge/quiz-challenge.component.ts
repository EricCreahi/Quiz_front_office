import { Component, EventEmitter, Output } from '@angular/core';
import { selectRandomQuiz, shuffleOptions } from '../../shared/utils/common';
import {
  Question,
  Questionnaire,
  QuestionOption,
  QuizView,
} from '../../shared/models';
import { finalize, interval, map, Observable, takeWhile } from 'rxjs';

@Component({
  selector: 'app-quiz-challenge',
  templateUrl: './quiz-challenge.component.html',
  styleUrl: './quiz-challenge.component.css',
})
export class QuizChallengeComponent {
  currentQuiz!: Questionnaire;
  currentQuestionIndex: number = 0;
  userChoices: Array<number> = [];
  correctChoices: Array<number> = [];
  duration = 45; // 45 Secondes
  countdown$: Observable<number> | undefined;
  showResults: boolean = false;

  @Output() navigate = new EventEmitter<QuizView>();

  ngOnInit() {
    // Mélanger les questions
    const shuffledQuestions = this.shuffleQuestions(
      selectRandomQuiz().questions.map((opt) => ({
        ...opt,
        options: shuffleOptions(opt.options),
      }))
    );
    this.currentQuiz = { ...selectRandomQuiz(), questions: shuffledQuestions };
    this.correctChoices = shuffledQuestions.map((q) => q.correctAnswerId);
    this.startCountdown(91);
  }

  handlePrev(): void {
    if (this.currentQuestionIndex >= 1) {
      this.currentQuestionIndex = this.currentQuestionIndex - 1;
    }
  }

  handleNext(): void {
    if (this.currentQuestionIndex < 9) {
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
    }
  }

  shuffleChoices(options: Array<QuestionOption>) {
    return shuffleOptions(options);
  }

  shuffleQuestions(questions: Array<Question>) {
    return shuffleOptions(questions);
  }

  onOptionSelected(selectedIndex: number) {
    this.userChoices[this.currentQuestionIndex] = selectedIndex;
  }

  startCountdown(duration: number) {
    this.countdown$ = interval(1000).pipe(
      map((elapsed) => duration - elapsed - 1), // Calcul du temps restant
      takeWhile((remaining) => remaining >= 0), // Arrêter lorsque le temps atteint 0
      finalize(() => this.handleValdateQuiz()) // Action une fois terminé
    );
  }

  handleValdateQuiz(): void {
    this.navigateToView('RESULT');
  }

  navigateToView(view: QuizView) {
    this.navigate.emit(view);
  }
}
