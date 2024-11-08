import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Howl, Howler } from 'howler';
import { QuestionService } from './shared/service/question.service';
import { Question, Response } from './shared/models';
import { createObserver } from './shared/utils/observer';
import { LocalStorageService } from './shared/service/localstorage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fratmat_anniv_quiz';
  sound: Howl;
  isLoading: boolean = false;

  constructor(
    private questionService: QuestionService,
    private toastr: ToastrService
  ) {
    this.sound = new Howl({
      src: ['/assets/opener.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.2,
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
    const audioContext = Howler.ctx;
    console.log(Howler.ctx);
    if (this.sound.playing() === false) {
      // Joue directement si l'AudioContext est déjà actif
      this.sound.play();
    } else {
      this.sound.pause();
    }

    // if (audioContext.state === 'suspended') {
    //   audioContext.resume().then(() => {
    //     // Joue le son après la reprise de l'AudioContext
    //     this.sound.play();
    //   });
    // } else {
    //   if (this.sound.playing() === false) {
    //     // Joue directement si l'AudioContext est déjà actif
    //     this.sound.play();
    //   }
    // }
  }

  loadQuestions() {
    const observer = createObserver<Response<Question>>(
      (res) => {
        this.isLoading = false;
        if (res.status === 'succes') {
          LocalStorageService.setItem('questions', res.data);
        } else {
          this.toastr.error(String(res.message), 'Erreur de connexion!');
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Une erreur est survenue!');
      }
    );

    this.questionService.getAll().subscribe(observer);
  }
}
