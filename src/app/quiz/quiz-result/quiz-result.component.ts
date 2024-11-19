import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  QuizView,
  Response,
  UserScore,
  Utilisateur,
} from '../../shared/models';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { Router } from '@angular/router';
import { createObserver } from '../../shared/utils/observer';
import { QuestionService } from '../../shared/service/question.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css',
})
export class QuizResultComponent implements OnInit {
  user: Utilisateur = LocalStorageService.getItem('auth');
  userScore!: UserScore;
  isLoading: boolean = false;
  @Output() navigate = new EventEmitter<QuizView>();

  constructor(
    private router: Router,
    private questionService: QuestionService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getScore();
  }

  trophyOptions: AnimationOptions = {
    path: '/assets/trophy.json',
  };

  confettiOptions: AnimationOptions = {
    path: '/assets/success_confetti.json',
  };

  drumOptions: AnimationOptions = {
    path: '/assets/drum.json',
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
    LocalStorageService.removeItem('cgu');
    LocalStorageService.removeItem('liste-tampon');
    LocalStorageService.removeItem('liste-cocher');
    this.navigateToRoute('/');
  }

  getScore() {
    const observer = createObserver<Response<UserScore>>(
      (res) => {
        setTimeout(() => {
          this.isLoading = false;
          if (res.status === 'succes') {
            this.userScore = res.oneData as UserScore;
          } else {
            this.toastr.error(String(res.message), 'Erreur!');
          }
        }, 2000);
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
      }
    );

    this.questionService
      .getUtilisateurScore(this.user.usermatricule)
      .subscribe(observer);
  }

  getAppreciation(score: number): string {
    if (score <= 5) {
      return `Vous êtes nouveau c'est ça? Courage!!`;
    } else if (score > 5 && score <= 8) {
      return `C'est moyen, mais pas mal!`;
    } else if (score > 8 && score <= 9) {
      return `Vous avez l'expérience de la maison!`;
    } else {
      return `Vous êtes un doyen de la maison, Respect!`;
    }
  }
}
