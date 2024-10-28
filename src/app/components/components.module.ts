import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { ModalComponent } from './modal/modal.component';
import { CguComponent } from './cgu/cgu.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    ModalComponent,
    QuizHeaderComponent,
    CguComponent,
  ],
  imports: [CommonModule, PortalModule],
  exports: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    ModalComponent,
    QuizHeaderComponent,
    CguComponent,
  ],
})
export class ComponentsModule {}
