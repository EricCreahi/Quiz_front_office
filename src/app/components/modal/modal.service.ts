import { Injectable } from '@angular/core';
import { ApplicationRef, ComponentRef, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from './modal.component';
import { createComponent, EnvironmentInjector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: ComponentRef<ModalComponent> | null = null;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  open(component: ComponentPortal<any>) {
    if (!this.modalRef) {
      // Create and attach the modal component dynamically
      const modal = createComponent(ModalComponent, {
        environmentInjector: this.injector,
      });

      this.appRef.attachView(modal.hostView);
      document.body.appendChild(modal.location.nativeElement);
      modal.instance.open(component);

      modal.instance.closeModal.subscribe(() => this.close());
      this.modalRef = modal;
    }
  }

  close() {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.modalRef = null;
    }
  }
}
