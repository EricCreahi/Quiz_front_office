import { Routes } from '@angular/router';
import { RankComponent } from './rank/rank.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'rank', component: RankComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then((m) => m.QuizModule),
  },
  { path: '**', redirectTo: 'auth' },
  { path: '***', redirectTo: '/' },
];
