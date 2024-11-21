import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { HowlerService } from '../../shared/service/howler.service';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrl: './cgu.component.css',
})
export class CguComponent {
  constructor(
    private modalService: ModalService,
    private howlerService: HowlerService
  ) {}

  handleAcceptCgu() {
    //TODO: update State for Reading CGU
    this.howlerService.playMainSound();
    this.modalService.close();
    // LocalStorageService.setItem('cgu', true);
  }
}
