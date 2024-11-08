import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mouseClik } from '../../shared/utils/sound';

@Component({
  selector: 'app-option-card',

  templateUrl: './option-card.component.html',
  styleUrl: './option-card.component.css',
})
export class OptionCardComponent {
  @Input() label!: string;
  @Input() isChecked = false;
  @Output() optionSelected = new EventEmitter<void>();

  toggleCheck() {
    mouseClik();
    this.optionSelected.emit();
  }

  selectOption() {
    this.toggleCheck();
  }
}
