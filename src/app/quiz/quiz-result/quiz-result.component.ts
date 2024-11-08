import { Component, EventEmitter, Output } from '@angular/core';
import { QuizView } from '../../shared/models';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css',
})
export class QuizResultComponent {
  @Output() navigate = new EventEmitter<QuizView>();

  options: AnimationOptions = {
    assetsPath: '/assets/success_confetti.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }

  navigateToView(view: QuizView) {
    this.navigate.emit(view);
  }
}
