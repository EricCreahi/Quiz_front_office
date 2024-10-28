import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ModalService } from './modal.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  portal: ComponentPortal<any> | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  open(portal: ComponentPortal<any>) {
    this.portal = portal;
    this.document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
  }

  close() {
    this.portal = null;
    this.document.body.style.overflow = 'auto'; // Restore scrolling
    this.closeModal.emit();
  }
}
