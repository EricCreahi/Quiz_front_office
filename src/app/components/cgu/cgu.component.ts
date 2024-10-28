import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrl: './cgu.component.css',
})
export class CguComponent {
  constructor(private modalService: ModalService) {}

  handleAcceptCgu() {
    //TODO: update State for Reading CGU
    this.modalService.close();
  }
}
