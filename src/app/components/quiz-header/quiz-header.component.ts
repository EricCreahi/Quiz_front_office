import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { Utilisateur } from '../../shared/models';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrl: './quiz-header.component.css',
})
export class QuizHeaderComponent implements OnInit {
  user: Utilisateur | undefined;

  ngOnInit(): void {
    this.user = LocalStorageService.getItem('auth');
  }
}
