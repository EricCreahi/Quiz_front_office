import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mouseClik } from '../../shared/utils/sound';

type ButtonVariantType = 'primary' | 'secondary' | 'danger' | 'neutral';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: ButtonVariantType = 'primary';
  @Input() disabled: boolean = false;
  @Input() label: string = 'Button';
  @Input() class!: string;

  // @Output() click = new EventEmitter<void>();

  // handleClick(): void {
  //   if (!this.disabled) {
  //     this.click.emit();
  //     console.log('Click');
  //     mouseClik();
  //   }
  // }
}
