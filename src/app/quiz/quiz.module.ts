import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { QuizChallengeComponent } from './quiz-challenge/quiz-challenge.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
import { LottieComponent } from 'ngx-lottie';
import { LocalStorageService } from '../shared/service/localstorage.service';

@NgModule({
  declarations: [
    HomeComponent,
    OptionCardComponent,
    QuizIntroComponent,
    QuizChallengeComponent,
    QuizResultComponent,
  ],
  imports: [CommonModule, QuizRoutingModule, ComponentsModule, LottieComponent],
  providers: [LocalStorageService],
})
export class QuizModule {}
