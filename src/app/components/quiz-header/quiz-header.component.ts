import { Component } from '@angular/core';
import { AuthState } from '../../shared/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser, selectUserState } from '../../shared/store/selectors';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrl: './quiz-header.component.css',
})
export class QuizHeaderComponent {
  authUser$: Observable<AuthState | null>;

  constructor(private store: Store) {
    this.authUser$ = this.store.select(selectUser);

    console.log(this.store.select(selectUser));
  }
}
