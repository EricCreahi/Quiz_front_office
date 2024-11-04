import { Component } from '@angular/core';
import { QuizView } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentView: QuizView = 'HOME';

  navigateTo(view: QuizView) {
    this.currentView = view;
  }
}
