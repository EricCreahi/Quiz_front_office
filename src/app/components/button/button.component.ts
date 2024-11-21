import { Component, Input } from '@angular/core';

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
  @Input() iconName!: string;
  @Input() showIcon: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() class!: string;
  @Input() btnType: HTMLButtonElement['type'] = 'button';

  // @Output() click = new EventEmitter<void>();

  // handleClick(): void {
  //   if (!this.disabled) {
  //     this.click.emit();
  //     console.log('Click');
  //     mouseClik();
  //   }
  // }
}
