import { Component, EventEmitter, Output } from '@angular/core';
import { QuizView } from '../../shared/models';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-quiz-intro',
  templateUrl: './quiz-intro.component.html',
  styleUrl: './quiz-intro.component.css',
})
export class QuizIntroComponent {
  canvas: HTMLCanvasElement = document.getElementById(
    'login_confetti'
  ) as HTMLCanvasElement;
  jsConfetti = new JSConfetti({ canvas: this.canvas });
  interval!: ReturnType<typeof setInterval>;
  @Output() navigate = new EventEmitter<QuizView>();

  ngOnInit(): void {
    this.jsConfetti.addConfetti({
      confettiColors: ['#FFFFFF', '#3ba002', '#a04602'],
      confettiRadius: 6,
      confettiNumber: 500,
    });
    this.interval = setInterval(() => {
      this.jsConfetti.addConfetti({
        confettiColors: ['#FFFFFF', '#3ba002', '#a04602'],
        confettiRadius: 6,
        confettiNumber: 500,
      });
    }, 5000);
  }

  navigateToView(view: QuizView) {
    this.navigate.emit(view);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.jsConfetti.clearCanvas();
  }
}
