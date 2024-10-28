import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { OptionCardComponent } from '../option-card/option-card.component';
import { selectRandomQuiz, shuffleOptions } from '../../shared/utils/common';
import { Question, Questionnaire, QuestionOption } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentQuiz!: Questionnaire;
  currentQuestionIndex: number = 0;
  userChoices: Array<number> = [];

  ngOnInit() {
    const shuffledQuestions = this.shuffleQuestions(
      selectRandomQuiz().questions.map((opt) => ({
        ...opt,
        options: shuffleOptions(opt.options),
      }))
    );
    this.currentQuiz = { ...selectRandomQuiz(), questions: shuffledQuestions };
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
 
  handleValdateQuiz(): void {
   
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
}
