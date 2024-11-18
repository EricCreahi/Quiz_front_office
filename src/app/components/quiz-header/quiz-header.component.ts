import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../shared/models';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { LogoutComponent } from '../logout/logout.component';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrl: './quiz-header.component.css',
})
export class QuizHeaderComponent implements OnInit {
  user: Utilisateur | undefined;
  portal = new ComponentPortal(LogoutComponent);
  showModal: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.user = LocalStorageService.getItem('auth');
  }

  showLogoutModal() {
    this.modalService.open(this.portal);
  }
}
