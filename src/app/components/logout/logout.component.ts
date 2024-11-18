import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(private modalService: ModalService, private router: Router) {}

  cancelLogout() {
    this.modalService.close();
  }

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

  handleLogout() {
    LocalStorageService.removeItem('auth');
    this.modalService.close();
    this.navigateToRoute('/');
  }
}
