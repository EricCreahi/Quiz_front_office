import { Component, EventEmitter, Output } from '@angular/core';
import { QuizView } from '../../shared/models';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css',
})
export class QuizResultComponent {
  @Output() navigate = new EventEmitter<QuizView>();

  constructor(private router: Router) {}

  trophyOptions: AnimationOptions = {
    path: '/assets/trophy.json',
  };

  confettiOptions: AnimationOptions = {
    path: '/assets/success_confetti.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }

  navigateToView(view: QuizView) {
    this.navigate.emit(view);
  }

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

  handleLogout(): void {
    LocalStorageService.removeItem('auth');
    this.navigateToRoute('/');
  }
}
