import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Howl } from 'howler';
import { ToastrService } from 'ngx-toastr';
import { Question, Response } from './shared/models';
import { LocalStorageService } from './shared/service/localstorage.service';
import { QuestionService } from './shared/service/question.service';
import { createObserver } from './shared/utils/observer';
import { LucideAngularModule, Volume, VolumeOff } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fratmat_anniv_quiz';
  sound: Howl;
  isLoading: boolean = false;
  isPlaying: boolean = false;
  readonly Volume = Volume;
  readonly VolumeOff = VolumeOff;

  constructor(
    private questionService: QuestionService,
    private toastr: ToastrService
  ) {
    this.sound = new Howl({
      src: ['/assets/opener.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.05,
      html5: true,
      preload: true,
    });
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  ngOnDestroy(): void {
    LocalStorageService.removeItem('questions');
  }

  playSound() {
    // const audioContext = Howler.ctx;
    // console.log(Howler.ctx);
    if (this.sound.playing() === false) {
      // Joue directement si l'AudioContext est déjà actif
      this.sound.play();
      this.isPlaying = true;
    } else {
      this.sound.pause();
      this.isPlaying = false;
    }
  }

  loadQuestions() {
    const observer = createObserver<Response<Question>>(
      (res) => {
        this.isLoading = false;
        if (res.status === 'succes') {
          LocalStorageService.setItem('questions', res.data);
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
