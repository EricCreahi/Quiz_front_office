import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize, interval, map, Observable, takeWhile } from 'rxjs';
import {
  ChoixReponseReq,
  ChoixReponseResponse,
  Question,
  QuizView,
  Response,
  TamponCocher,
  UpdateChoixReponseReq,
  Utilisateur,
} from '../../shared/models';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { QuestionService } from '../../shared/service/question.service';
import { selectQuestions } from '../../shared/utils/common';
import { createObserver } from '../../shared/utils/observer';

@Component({
  selector: 'app-quiz-challenge',
  templateUrl: './quiz-challenge.component.html',
  styleUrl: './quiz-challenge.component.css',
})
export class QuizChallengeComponent {
  currentQuestionIndex: number = 0;
  userChoices: Array<number> = [];
  answeredQuestions: Array<{ index: number; cocherTamponId: number }> = [];
  countdown$: Observable<number> | undefined;
  showResults: boolean = false;
  isUpdatingChoice: boolean = false;
  user: Utilisateur = LocalStorageService.getItem('auth');

  //
  questions: Array<Question> = LocalStorageService.getItem('questions');
  questionsTamponCocher: Array<TamponCocher> =
    LocalStorageService.getItem('liste-tampon');
  questionsTamponsIds: Array<number> = [];
  quizQuestions: Array<Question> = [];

  @Output() navigate = new EventEmitter<QuizView>();

  constructor(
    private questionService: QuestionService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadQuestions();
    // this.startCountdown(91);
  }

  handlePrev(): void {
    if (this.currentQuestionIndex >= 1) {
      this.currentQuestionIndex = this.currentQuestionIndex - 1;
    }
  }

  handleNext(): void {
    if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
    } else {
      this.handleValidateQuiz();
    }
  }

  onOptionSelected(selectedIndex: number) {
    this.userChoices[this.currentQuestionIndex] = selectedIndex;
  }

  startCountdown(duration: number) {
    this.countdown$ = interval(1000).pipe(
      map((elapsed) => duration - elapsed - 1), // Calcul du temps restant
      takeWhile((remaining) => remaining >= 0), // Arrêter lorsque le temps atteint 0
      finalize(() => this.handleValidateQuiz()) // Action une fois terminé
    );
  }

  handleValidateQuiz(): void {
    this.isUpdatingChoice = true;
    const observer = createObserver<Response<void>>(
      (res) => {
        this.isUpdatingChoice = false;
        if (res.status === 'succes') {
          this.navigateToView('RESULT');
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
        this.isUpdatingChoice = false;
      },
      () => {
        this.isUpdatingChoice = false;
      }
    );

    this.questionService
      .validerListeCocherByMatricule(this.user.usermatricule)
      .subscribe(observer);
  }

  navigateToView(view: QuizView) {
    this.navigate.emit(view);
  }

  // Charger les questions à afficher
  loadQuestions(): void {
    // Id de toutes les questions tampons auquelles repondre
    let idsQuestionsTamponsCocher: Array<number> = [];
    let questionsTampon: Array<Question> = [];

    // Récupération de toutes les questions tampon
    this.questionsTamponCocher.map((qt) => {
      idsQuestionsTamponsCocher.push(qt.sousQuestionId);

      // // On récupère les IDs des réponses déjà sélectionnées
      // this.userChoices.push(qt.choixId);
    });

    questionsTampon = this.questions.filter(
      (q) => !idsQuestionsTamponsCocher.includes(q.sousQuestionId)
    );

    this.quizQuestions = selectQuestions(
      this.questions,
      10 - questionsTampon.length,
      idsQuestionsTamponsCocher
    );
  }

  // Valider le choix pour une question
  validateQuestionChoice() {
    this.isUpdatingChoice = true;
    // console.log('Formulaire soumis', this.loginForm.value);
    // Connexion au backend pour vérification
    const observer = createObserver<Response<ChoixReponseResponse>>(
      (res) => {
        this.isUpdatingChoice = false;
        if (res.status === 'succes') {
          // this.navigateToRoute('/quiz');
          // Mise à jour des questions actuelles déjà répondues
          this.answeredQuestions.push({
            cocherTamponId: Number(res.oneData?.cocherTamponId),
            index: this.currentQuestionIndex, // Récupération de l'index de la question précédente
          });

          this.handleNext();
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
        this.isUpdatingChoice = false;
      },
      () => {
        this.isUpdatingChoice = false;
      }
    );

    const choiceData: ChoixReponseReq = {
      choixId: this.userChoices[this.currentQuestionIndex],
      date_Cocher: new Date().toISOString(),
      matricule: this.user.usermatricule,
      position:
        this.questionsTamponCocher.length + this.currentQuestionIndex + 1,
    };

    this.questionService.choixReponseQuestion(choiceData).subscribe(observer);
  }

  // mettre à jour le choix d'une question déjà répondu
  updateQuestionChoice() {
    this.isUpdatingChoice = true;
    // console.log('Formulaire soumis', this.loginForm.value);
    // Connexion au backend pour vérification
    const observer = createObserver<Response<void>>(
      (res) => {
        this.isUpdatingChoice = false;
        if (res.status === 'succes') {
          this.handleNext();
          // this.navigateToRoute('/quiz');
          // Mise à jour des questions actuelles déjà répondues
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
        this.isUpdatingChoice = false;
      },
      () => {
        this.isUpdatingChoice = false;
      }
    );

    const newChoiceData: UpdateChoixReponseReq = {
      choixId: this.userChoices[this.currentQuestionIndex],
      cocherTamponId:
        this.answeredQuestions[this.currentQuestionIndex].cocherTamponId,
    };

    this.questionService
      .updateChoixReponseQuestion(
        newChoiceData.choixId,
        newChoiceData.cocherTamponId
      )
      .subscribe(observer);
  }

  // Vérifier qu'on a déjà repondu à une question et
  checkIfAlreadyAnswered(index: number): boolean {
    if (this.answeredQuestions.find((item) => item.index === index)) {
      return true;
    }
    return false;
  }
}
