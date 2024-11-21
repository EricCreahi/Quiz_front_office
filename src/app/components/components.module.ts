import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  Crown,
  LoaderPinwheel,
  LucideAngularModule,
  Medal,
  Rocket,
  ScanFace,
} from 'lucide-angular';
import { ButtonComponent } from './button/button.component';
import { CguComponent } from './cgu/cgu.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    ModalComponent,
    QuizHeaderComponent,
    CguComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    PortalModule,
    LucideAngularModule.pick({
      Rocket,
      ScanFace,
      LoaderPinwheel,
      Crown,
      Medal,
    }),
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    ModalComponent,
    QuizHeaderComponent,
    CguComponent,
    LogoutComponent,
  ],
})
export class ComponentsModule {}
