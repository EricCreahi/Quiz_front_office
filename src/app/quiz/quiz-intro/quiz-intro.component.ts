import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import JSConfetti from 'js-confetti';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMCompleteEvent } from 'ngx-lottie';
import { QuizView, Utilisateur } from '../../shared/models';
import { LocalStorageService } from '../../shared/service/localstorage.service';

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
  showCountdown: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user: Utilisateur = LocalStorageService.getItem('auth');
    // On vérifie si l'utilisateur est déjà connecté
    if (user == undefined) {
      this.navigateToRoute('/');
    }

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

  switchToCountDown() {
    this.showCountdown = true;
    setTimeout(() => {
      this.navigateToView('CHALLENGE');
    }, 4000);
  }

  navigateToView(view: QuizView) {
    this.navigate.emit(view);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.jsConfetti.clearCanvas();
  }

  options: AnimationOptions = {
    path: '/assets/ready.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  onComplete(event: BMCompleteEvent): void {
    console.log(event);
  }

  handleLogout(): void {
    LocalStorageService.removeItem('auth');
    LocalStorageService.removeItem('cgu');

    this.navigateToRoute('/');
  }

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
