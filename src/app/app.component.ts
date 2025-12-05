import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Volume, VolumeOff } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';
import { Question, Response } from './shared/models';
import { LocalStorageService } from './shared/service/localstorage.service';
import { QuestionService } from './shared/service/question.service';
import { createObserver } from './shared/utils/observer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fratmat_anniv_quiz';
  isLoading: boolean = false;
  isPlaying: boolean = false;
  readonly Volume = Volume;
  readonly VolumeOff = VolumeOff;
  currentYear = new Date().getFullYear();

  constructor(
    private questionService: QuestionService,
    private toastr: ToastrService // private howlerService: HowlerService
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
    // this.howlerService.toggleSound();
  }

  ngOnDestroy(): void {
    LocalStorageService.removeItem('questions');
  }

  loadQuestions() {
    const observer = createObserver<Response<Question>>(
      (res) => {
        this.isLoading = false;
        if (res.status === 'succes') {
          const questions = res.data;
          if (questions != null && questions != undefined) {
            const filteredQuestions: Question[] = questions.filter(
              (q) => q.estVisible && q.question.estVisible
            );
            LocalStorageService.setItem('questions', filteredQuestions);
            return;
          }

          // // res.data = filtredQuestions;
          // LocalStorageService.setItem('questions', res.data);
        } else {
          this.toastr.error(String(res.message), 'Erreur!');
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
      }
    );

    this.questionService.getAll().subscribe(observer);
  }

  // loadQuizzes() {
  //   const observer = createObserver<Response<QuizDay>>(
  //     (res) => {
  //       this.isLoading = false;
  //       if (res.status === 'succes') {
  //         // Récupéation du quiz actif
  //         const enabledQuiz = res.data?.find((i) => i.estVisible === true);
  //         if (typeof enabledQuiz != 'undefined') {
  //           LocalStorageService.setItem('current-quiz', enabledQuiz);
  //         } else {
  //           this.toastr.error("Aucun quiz actif aujourd'hui", 'Erreur!');
  //         }
  //       } else {
  //         this.toastr.error(String(res.message), 'Erreur!');
  //       }
  //     },
  //     (error) => {
  //       this.toastr.error(error.message, 'Une erreur est survenue!');
  //     }
  //   );

  //   this.questionService.getQuizList().subscribe(observer);
  // }
}
