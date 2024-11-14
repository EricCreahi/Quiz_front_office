import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import JSConfetti from 'js-confetti';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMCompleteEvent } from 'ngx-lottie';
import {
  QuizView,
  Response,
  TamponCocher,
  Utilisateur,
} from '../../shared/models';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { QuestionService } from '../../shared/service/question.service';
import { ToastrService } from 'ngx-toastr';
import { createObserver } from '../../shared/utils/observer';

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
  user: Utilisateur = LocalStorageService.getItem('auth');
  isLoadingQuestionsCocher: boolean = false;
  isLoadingQuestionsTampon: boolean = false;

  constructor(
    private router: Router,
    private questionService: QuestionService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // On vérifie si l'utilisateur est déjà connecté
    if (this.user == undefined) {
      this.navigateToRoute('/');
    } else {
      this.checkQuestionsCocher();
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
    // console.log(animationItem);
  }

  onComplete(event: BMCompleteEvent): void {
    // console.log(event);
  }

  handleLogout(): void {
    LocalStorageService.removeItem('auth');
    LocalStorageService.removeItem('cgu');

    this.navigateToRoute('/');
  }

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

  checkQuestionsCocher() {
    this.isLoadingQuestionsCocher = true;
    const observer = createObserver<Response<TamponCocher>>(
      (res) => {
        this.isLoadingQuestionsCocher = false;
        if (res.status === 'succes' || res.status === null) {
          if (res.nbreData < 10) {
            // On vérifie les questions non répondues
            this.checkQuestionsTampon();
          } else {
            // Toutes les questions on été répondues
            LocalStorageService.setItem('liste-cocher', res.data);
          }
          // LocalStorageService.setItem('questions', res.data);
        } else {
          this.toastr.error(String(res.message), 'Erreur!');
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
        this.isLoadingQuestionsCocher = false;
      }
    );

    this.questionService
      .getListeCocherByMatricule(this.user.usermatricule)
      .subscribe(observer);
  }

  checkQuestionsTampon() {
    this.isLoadingQuestionsTampon = true;
    const observer = createObserver<Response<TamponCocher>>(
      (res) => {
        this.isLoadingQuestionsTampon = false;
        if (res.status === 'succes') {
          LocalStorageService.setItem('liste-tampon', res.data);
        } else {
          this.toastr.error(String(res.message), 'Erreur!');
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
        this.isLoadingQuestionsTampon = false;
      }
    );

    this.questionService
      .getListeTamponByMatricule(this.user.usermatricule)
      .subscribe(observer);
  }
}
