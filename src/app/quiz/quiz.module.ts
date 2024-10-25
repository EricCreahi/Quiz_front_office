import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { OptionCardComponent } from './option-card/option-card.component';

@NgModule({
  declarations: [HomeComponent, OptionCardComponent],
  imports: [CommonModule, QuizRoutingModule, ComponentsModule],
})
export class QuizModule {}
