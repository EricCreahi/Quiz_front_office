import { Component, OnInit } from '@angular/core';
import { Response, UserRanking } from '../shared/models';
import { QuestionService } from '../shared/service/question.service';
import { createObserver } from '../shared/utils/observer';
import { ComponentsModule } from '../components/components.module';
import { Crown, LucideAngularModule } from 'lucide-angular';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-rank',
  imports: [ComponentsModule, LucideAngularModule, NgIf],
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.css',
})
export class RankComponent implements OnInit {
  isLoading: boolean = false;
  usersRanks: Array<UserRanking> = [];
  readonly Crown = Crown;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRanking();
  }

  loadRanking() {
    const observer = createObserver<Response<UserRanking>>(
      (res) => {
        this.isLoading = false;
        if (res.status === 'succes') {
          this.usersRanks = res.data?.sort(
            (a, b) => b.totalNote - a.totalNote
          ) as Array<UserRanking>;
        } else {
          // this.toastr.error(String(res.message), 'Erreur!');
        }
      },
      (error) => {
        // this.toastr.error(error.message, 'Une erreur est survenue!');
      }
    );

    this.questionService.getRanking().subscribe(observer);
  }

  handleBack() {
    this.router.navigate(['/']);
  }
}
