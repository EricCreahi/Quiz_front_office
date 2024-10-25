import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    QuizHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    QuizHeaderComponent,
  ],
})
export class ComponentsModule {}
